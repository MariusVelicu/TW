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

  it('should be able to click', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
  })


  it('should load on click', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
    await page.waitForSelector('#main')
    const first = await page.$eval("#main tr:first-child td:first-child", e => e.textContent)
    expect(first.trim()).toEqual('tim')
  })

  it('there are 2 elements in the list', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
    await page.waitForSelector('#main')
    const content = await page.$$('#main tr')
    let contentArray = Array.apply(null, content)
    expect(contentArray.length).toEqual(2)
  })

  it('all loaded employees are accountants', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#load')
    await page.click('#load')
    await page.waitForSelector('#main')
    const content = await page.$$eval('#main tr td:nth-child(2)', nodes => nodes.map(e => e.innerText))
    let contentArray = Array.apply(null, content)
    expect(contentArray.every(e => e === 'accountant')).toEqual(true)
  })

  afterAll(async () => {
    await page.close()
    await browser.close()
  })
})