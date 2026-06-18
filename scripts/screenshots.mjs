import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://www.piralabs.com.br';

const PAGES = [
  { name: '00-home',                         path: '/' },
  { name: '01-sobre',                        path: '/sobre' },
  { name: '02-creative-business-turnaround', path: '/creative-business-turnaround' },
  { name: '03-como-pensamos',                path: '/como-pensamos' },
  { name: '04-chama',                        path: '/chama' },
  { name: '05-inspira',                      path: '/inspira' },
  { name: '06-transpira',                    path: '/transpira' },
  { name: '07-inspira-juridico',             path: '/inspira/juridico' },
  { name: '08-transpira-juridico',           path: '/transpira/juridico' },
  { name: '09-faisca-imersa-em-ia',          path: '/faisca/imersa-em-ia' },
  { name: '10-faisca-pocket',                path: '/faisca/pocket' },
  { name: '11-faisca-juridica',              path: '/faisca/juridica' },
  { name: '12-faisca-oxigenio',              path: '/faisca/oxigenio-ia-search' },
  { name: '13-antes-pira',                   path: '/antes-pira' },
  { name: '14-antes-pira-arquivo',           path: '/antes-pira/arquivo' },
  { name: '15-faisca-hub',                   path: '/faisca' },
  { name: '16-faisca-clevel',                path: '/faisca/c-level-as-a-service' },
  { name: '17-contato',                      path: '/contato' },
];

const VIEWPORTS = [
  { suffix: 'desktop', width: 1440, height: 900 },
  { suffix: 'mobile',  width: 390,  height: 844 },
];

async function scrollFull(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
}

async function takeScreenshots() {
  const browser = await chromium.launch();
  const timestamp = new Date()
    .toISOString()
    .slice(0, 16)
    .replace('T', '_')
    .replace(':', 'h');
  const outDir = join(process.cwd(), 'screenshots', timestamp);
  mkdirSync(outDir, { recursive: true });

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    for (const pg of PAGES) {
      const url = `${BASE_URL}${pg.path}`;
      const filename = `${pg.name}-${viewport.suffix}.png`;
      console.log(`📸 ${viewport.suffix} — ${url}`);
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
        await page.evaluate(() => document.fonts.ready);
        await scrollFull(page);
        await page.waitForTimeout(2500);
        await page.screenshot({
          path: join(outDir, filename),
          fullPage: true,
        });
        console.log(`   ✅ ${filename}`);
      } catch (err) {
        console.log(`   ❌ erro em ${filename}: ${err.message}`);
      }
    }

    await context.close();
  }

  await browser.close();
  console.log(`\n✅ Concluído — screenshots/${timestamp}/`);
}

takeScreenshots();
