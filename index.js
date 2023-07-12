//This code can be used in Instagram bots. And it is written by Semih Ceylan
const puppeteer = require('puppeteer');


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
(async () => {
    const uname = '<usernamegoeshere>';
    const pword = '<passwordgoeshere>';
    const ig = 'https://www.instagram.com/';
    const browser = await puppeteer.launch({headless: false, devtools: false });    
    console.log('chromium baslatıldı');
    const page = await browser.newPage();
    console.log('yeni sekme acildi');
    await page.goto(ig, {waitUntil:'networkidle2'} );
    console.log('siteye vardım');
    await delay(1000);

    console.log('selektör geldi mis');
    await page.type('#loginForm > div > div:nth-child(1) > div > label > input', uname, delay(600));
    await page.type('#loginForm > div > div:nth-child(2) > div > label > input', pword, delay(600));
    await page.click('#loginForm > div > div:nth-child(3) > button > div');
    console.log('tıkladık bakam');
    await delay(2000);

    page.waitForNavigation({ waitUntil: 'networkidle2' });
    console.log('home tusu selektörü bekliyom');
    page.waitForSelector('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(1) > div > a');
    await delay(2000);
    console.log('tıklayalım');
    page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page.click('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(1) > div > a');
    await delay(2000);
    console.log('simdi degil selektörü');
    page.waitForNavigation({ waitUntil: 'networkidle2' });
    page.waitForSelector('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');
    console.log('tıklayalım');
    await page.click('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');
    console.log('!!!!beğenme vaktiii!!!!');
    x = 0;
    await delay(3000);
    for(c = 0; c < 4; c++){
        for (let i = 0 ; i < 3;  i++ ) {
          //  const posts =  await page.evaluate(() => {
          //      console.log("arrayi tanımladık");
          //      return document.querySelectorAll('svg[aria-label="Beğen"]');
          //  });
            let posts = await page.$$('section[class="ltpMr  Slqrh"] svg[aria-label="Beğen"]:not([fill="#ed4956"])');
            let post = posts[x];
            await post.click();
            process.stdout.write("<3");
            x++;
            await delay(2000);
        }
        console.log('delay to not get banned from instagram')
        await delay(5000);
    }
    await browser.close();
    console.log('kapattim');
  })();