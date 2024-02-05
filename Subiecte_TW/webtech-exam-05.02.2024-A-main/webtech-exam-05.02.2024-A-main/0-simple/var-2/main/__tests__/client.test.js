const puppeteer = require('puppeteer')

let browser
let page

process.on('uncaughtException', e => console.warn(e.stack))

describe('local', () => {

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
      ignoreDefaultArgs: ['--disable-extensions'],
    })
    page = await browser.newPage()
  })

  it('form exists in page, page loads correctly', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('div#form')
    const first = await page.$eval("#main div:first-child", e => e.textContent)
    expect(first.trim()).toBe('jim engineer')
  })


  it('can click button to add record', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#addBtn')
    await page.click('#addBtn')
    await page.waitForResponse(response => response.status() === 200 && response.request().method() === 'GET')
    const items = await page.$$eval("#main>div", e => e)
    let contentArray = Array.apply(null, items)
    expect(contentArray.length).toBe(4)
  })

  it('form elements exist', async () => {
    await page.goto('http://localhost:8080')
    await page.$eval('#nameInput', el => el.value = 'test');
    await page.$eval('#jobInput', el => el.value = 'tester');
    await page.waitForSelector('#addBtn')
    await page.click('#addBtn')
    await page.waitForResponse(response => response.status() === 200 && response.request().method() === 'GET')
    const items = await page.$$eval("#main>div", e => e)
    let contentArray = Array.apply(null, items)
    expect(contentArray.length).toBe(5)
  })

  it('last record is correct', async () => {
    await page.goto('http://localhost:8080')
    await page.$eval('#nameInput', el => el.value = 'final');
    await page.$eval('#jobInput', el => el.value = 'tester');
    await page.waitForSelector('#addBtn')
    await page.click('#addBtn')
    await page.waitForResponse(response => response.status() === 200 && response.request().method() === 'GET')
    const item = await page.$eval("#main>div:last-child", e => e.innerHTML)
    expect(item).toMatch('final tester')
  })

  afterAll(async () => {
    await page.close()
    await browser.close()
  })
})