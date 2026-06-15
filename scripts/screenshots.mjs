import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://www.piralabs.com.br';

const PAGES = [
  { name: '00-home', path: '/' },
  { name: '01-sobre', path: '/sobre' },
  { name: '02-creative-business-turnaround', path: '/creative-business-turnaround' },
  { name: '03-como-pensamos', path: '/como-pensamos' },
  { name: '04-chama', path: '/chama' },
  { name: '05-inspira', path: '/inspira' },
  { name: '06-transpira', path: '/transpira' },
  { name: '07-inspira-juridico', path: '/inspira/juridico' },
  { name: '08-transpira-juridico', path: '/transpira/juridico' },
  { name: '09-faisca-imersa-em-ia', path: '/faisca/imersa-em-ia' },
  { name: '10-faisca-pocket', path: '/faisca/pocket' },
  { name: '11-faisca-juridica', path: '/faisca/juridica' },
  { name: '12-faisca-oxigenio', path: '/faisca/oxigenio-ia-search' },
  { name: '13-antes-pira', path: '/antes-pira' },
  { name: '14-contato', path: '/contato' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

async function takeScreenshots() {
  const browser = await chromium.launch();
  const timestamp = new Date().toISOString().slice(0, 10);
  const outDir = join(process.cwd(), 'screenshots', timestamp);
  mkdirSync(outDir, { recursive: true });

  for (const viewport of VIEWPORTS) {
    const vpDir = join(outDir, viewport.name);
    mkdirSync(vpDir, { recursive: true });

    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    for (const pg of PAGES) {
      const url = `${BASE_URL}${pg.path}`;
      console.log(`📸 ${viewport.name} — ${url}`);
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(1500);
        await page.screenshot({
          path: join(vpDir, `${pg.name}.png`),
          fullPage: true,
        });
        console.log(`   ✅ salvo: ${pg.name}.png`);
      } catch (err) {
        console.log(`   ❌ erro: ${err.message}`);
      }
    }

    await context.close();
  }

  await browser.close();
  console.log(`\n✅ Screenshots salvos em: screenshots/${timestamp}/`);
}

takeScreenshots();
