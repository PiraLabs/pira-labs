// capture-benchmarks.js
// Captures full-page screenshots of benchmark sites for Pira Labs
// Run: node scripts/capture-benchmarks.js

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUTPUT_BASE = path.join(__dirname, '..', 'benchmark-screenshots');

// --- Site definitions ---
const SITES = [
  {
    slug: 'heimr',
    pages: [
      { url: 'https://heimr.co/', slug: 'homepage' },
      { url: 'https://heimr.co/services', slug: 'services', fallback: 'https://heimr.co/work' },
    ],
  },
  {
    slug: 'mindalizer',
    pages: [
      { url: 'https://www.mindalizer.com/', slug: 'homepage' },
      { url: 'https://www.mindalizer.com/services', slug: 'services' },
    ],
  },
  {
    slug: 'unify',
    pages: [
      { url: 'https://www.unifyconsulting.com/', slug: 'homepage' },
      { url: 'https://www.unifyconsulting.com/services', slug: 'services' },
    ],
  },
  {
    slug: 'nextstage',
    pages: [
      { url: 'https://www.nextstage.co/', slug: 'homepage' },
      { url: 'https://www.nextstage.co/about', slug: 'about' },
    ],
  },
  {
    slug: 'stratence',
    pages: [
      { url: 'https://www.stratence.partners/', slug: 'homepage' },
    ],
  },
  {
    slug: 'alicelabs',
    pages: [
      { url: 'https://alicelabs.ai/en/', slug: 'homepage' },
      { url: 'https://alicelabs.ai/en/services', slug: 'services' },
    ],
  },
  {
    slug: 'bcg',
    pages: [
      { url: 'https://www.bcg.com/capabilities/artificial-intelligence', slug: 'homepage' },
    ],
  },
  {
    slug: 'octahedron',
    pages: [
      { url: 'https://www.octahedronconsulting.com/', slug: 'homepage' },
      { url: 'https://www.octahedronconsulting.com/about', slug: 'about' },
    ],
  },
];

const DESKTOP_VIEWPORT = { width: 1440, height: 900 };
const MOBILE_VIEWPORT = { width: 390, height: 844 };
const PAGE_TIMEOUT = 15000;

// Results for index
const results = [];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function loadPageWithTimeout(page, url, timeout) {
  const nav = page.goto(url, { waitUntil: 'domcontentloaded', timeout });

  const networkIdleRace = Promise.race([
    page.waitForLoadState('networkidle').catch(() => {}),
    new Promise(resolve => setTimeout(resolve, 5000)),
  ]);

  await nav;
  await networkIdleRace;
}

async function captureScreenshot(browser, url, outputPath, viewport, label) {
  const context = await browser.newContext({
    viewport,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    await loadPageWithTimeout(page, url, PAGE_TIMEOUT);

    // Check for bot-block indicators
    const title = await page.title();
    const bodyText = await page.evaluate(() => document.body ? document.body.innerText.slice(0, 300) : '');
    const blocked =
      title.toLowerCase().includes('access denied') ||
      title.toLowerCase().includes('403') ||
      title.toLowerCase().includes('just a moment') ||
      bodyText.toLowerCase().includes('enable javascript') ||
      bodyText.toLowerCase().includes('cloudflare') && bodyText.toLowerCase().includes('checking');

    if (blocked) {
      console.log(`  BLOCKED  ${label} — title: "${title}"`);
      results.push({ url, outputPath, label, status: 'BLOCKED' });
      return 'BLOCKED';
    }

    ensureDir(path.dirname(outputPath));
    await page.screenshot({ path: outputPath, fullPage: true });
    console.log(`  CAPTURED ${label}`);
    results.push({ url, outputPath, label, status: 'CAPTURED' });
    return 'CAPTURED';
  } catch (err) {
    console.log(`  FAILED   ${label} — ${err.message.split('\n')[0]}`);
    results.push({ url, outputPath, label, status: 'FAILED' });
    return 'FAILED';
  } finally {
    await context.close();
  }
}

async function capturePage(browser, siteSlug, pageSlug, url, fallbackUrl) {
  const siteDir = path.join(OUTPUT_BASE, siteSlug);
  ensureDir(siteDir);

  const desktopFile = path.join(siteDir, `${pageSlug}-desktop.png`);
  const mobileFile = path.join(siteDir, `${pageSlug}-mobile.png`);

  const desktopLabel = `${siteSlug}/${pageSlug}-desktop`;
  const mobileLabel = `${siteSlug}/${pageSlug}-mobile`;

  let desktopStatus = await captureScreenshot(browser, url, desktopFile, DESKTOP_VIEWPORT, desktopLabel);

  // If desktop failed and there is a fallback URL, try fallback
  if (desktopStatus === 'FAILED' && fallbackUrl) {
    console.log(`  Retrying desktop with fallback URL: ${fallbackUrl}`);
    desktopStatus = await captureScreenshot(browser, fallbackUrl, desktopFile, DESKTOP_VIEWPORT, desktopLabel + '(fallback)');
  }

  const urlToUse = (desktopStatus === 'FAILED' && fallbackUrl) ? fallbackUrl : url;
  await captureScreenshot(browser, urlToUse, mobileFile, MOBILE_VIEWPORT, mobileLabel);
}

function writeIndex() {
  ensureDir(path.join(__dirname, '..', 'tasks'));
  const indexPath = path.join(__dirname, '..', 'tasks', 'benchmark-screenshots-index.md');

  const captured = results.filter(r => r.status === 'CAPTURED').length;
  const failed = results.filter(r => r.status === 'FAILED').length;
  const blocked = results.filter(r => r.status === 'BLOCKED').length;

  let md = `# Benchmark Screenshots Index — PIRA LABS\n\n`;
  md += `| Site | Page | Device | File path | Status |\n`;
  md += `|------|------|--------|-----------|--------|\n`;

  for (const r of results) {
    const parts = r.label.replace('(fallback)', '').split('/');
    const site = parts[0] || '';
    const pageParts = (parts[1] || '').split('-');
    const device = pageParts.pop() || '';
    const page = pageParts.join('-') || '';
    const relPath = r.outputPath.replace(/\\/g, '/');
    md += `| ${site} | ${page} | ${device} | ${relPath} | ${r.status} |\n`;
  }

  md += `\n---\n\n`;
  md += `**Total captured:** ${captured}  \n`;
  md += `**Total failed:** ${failed}  \n`;
  md += `**Total blocked:** ${blocked}  \n`;
  md += `**Total attempted:** ${results.length}  \n`;

  fs.writeFileSync(indexPath, md, 'utf8');
  console.log(`\nIndex written to: ${indexPath}`);
}

async function main() {
  console.log('Launching Chromium...');
  const browser = await chromium.launch({ headless: true });

  let homepageFailures = 0;

  try {
    for (const site of SITES) {
      console.log(`\n=== ${site.slug.toUpperCase()} ===`);

      for (const pageConfig of site.pages) {
        const isHomepage = pageConfig.slug === 'homepage';

        await capturePage(
          browser,
          site.slug,
          pageConfig.slug,
          pageConfig.url,
          pageConfig.fallback || null
        );

        if (isHomepage) {
          // Check if both desktop and mobile for this homepage failed/blocked
          const homepageResults = results.filter(
            r => r.label.startsWith(`${site.slug}/homepage`)
          );
          const allBad = homepageResults.every(
            r => r.status === 'FAILED' || r.status === 'BLOCKED'
          );
          if (allBad && homepageResults.length > 0) {
            homepageFailures++;
            console.log(`  Homepage failure count: ${homepageFailures}/4`);
          }
        }

        if (homepageFailures >= 4) {
          console.log('\nReached 4 homepage failures — stopping early.');
          writeIndex();
          return;
        }
      }
    }
  } finally {
    await browser.close();
  }

  writeIndex();
}

main().catch(err => {
  console.error('Fatal error:', err);
  writeIndex();
  process.exit(1);
});
