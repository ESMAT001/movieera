const { response } = require('express');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.once('load', () => console.log('loaded'))
    // browser.on('targetchanged', target => console.log('target  9999999999ad', target.url()));
    page.setDefaultTimeout(30000 * 200)

    await page.goto('file:///C:/Users/skyWalker/Desktop/projects/MovieEra/frontend/movieera/test/index.html');
    //    console.log(data)
    await page.screenshot({ path: './test/screenshot.png' })
    await page.waitForSelector("iframe")
    const frame = page.frames()[1]
    // console.log(frame)

    // page.on('response', response => console.log(response))

    await frame.waitForNavigation({
        timeout: 60000 * 10,
        waitUntil: "networkidle2"
    })


    // await frame.click('.btn.download-btn')
    await frame.waitForSelector('#__BVID__39')
    let element = await frame.$('#__BVID__39')
    console.log(element)
    let value = await frame.evaluate(el => el.value, element)
    console.log(value)
    await page.screenshot({ path: './test/screenshot1.png' })

    // await frame.waitForSelector(".btn.download-btn")
    // await page.screenshot({ path: './test/screenshot.png' })

    // other actions...
    await browser.close();
})();