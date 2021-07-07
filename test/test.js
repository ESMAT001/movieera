const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.once('load', () => console.log('loaded'))

    page.setDefaultTimeout(30000 * 20)

    await page.goto('file:///C:/Users/skyWalker/Desktop/projects/MovieEra/frontend/movieera/test/index.html');
    //    console.log(data)
    await page.screenshot({ path: './test/screenshot.png' })
    await page.waitForSelector("iframe")
    const frame = page.frames()[1]
    console.log(frame)

    await frame.waitForNavigation({
        timeout:60000 * 10,
        waitUntil:"networkidle2"
    })
    await page.screenshot({ path: './test/screenshot1.png' })

    // await frame.waitForSelector(".btn.download-btn")
    // await page.screenshot({ path: './test/screenshot.png' })

    // other actions...
    await browser.close();
})();