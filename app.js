//This code can be used in Youtube bots. And it is written by Sam Jays
const puppeteer = require('puppeteer');

/*
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
*/
(async () => {
   /* const email = 'senihbceylan@gmail.com';
    const yt = 'https://www.youtube.com/';
    const browser = await puppeteer.launch({headless: false, devtools: false });    
    console.log('chromium baslatıldı');
    const page = await browser.newPage();
    console.log('yeni sekme acildi');
    await page.goto(yt, {waitUntil:'networkidle2'} );
    console.log('siteye vardım');
    await delay(1000);
    //const loginButton = await page.$x('//ytd-button-renderer > a');
    console.log('selektör geldi');
    //await page.waitForSelector('');
    //login = await page.$x('//a[class = "yt-simple-endpoint style-scope ytd-button-renderer"]');
    loginButton = await page.$x('//*[@id="buttons"]/ytd-button-renderer/a');
    //console.log(loginButton);
    await loginButton[0].click();
    console.log('tıkladık bakalım');
    await delay(1000);
    await page.type('#identifierId', email , delay(500));
    await page.click('#identifierNext > div > button > div.VfPpkd-RLmnJb');
    await browser.close;
    console.log('kapattim');*/
    await browser.close;
  })();