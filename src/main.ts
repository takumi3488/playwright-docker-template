import { chromium, Browser } from 'playwright'

const hello = async (browser: Browser) => {
  const page = await browser.newPage()
  await page.goto('https://en.wikipedia.org/wiki/Hello')
  const text = await (await page.$('#firstHeading'))?.textContent()
  console.log(`${text}, World!`)
}

const browser = await chromium.launch()
try {
  await hello(browser)
} finally {
  await browser.close()
}
