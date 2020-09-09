const puppeter = require('puppeteer');

(async () => {

    //Url do filme ou site de onde você vai coletar as informações
    let filmeUrl = 'https://www.imdb.com/title/tt6723592/?ref_=hm_fanfav_tt_1_pd_fp1';
    
    let browser = await puppeter.launch({headless: false});
    let page = await browser.newPage();

    await page.goto(filmeUrl, { waitUntil:'networkidle2'});

    let dados = await page.evaluate(() =>{
        let titulo = document.querySelector('div[class="title_wrapper"] > h1').innerText;
        let nota = document.querySelector('span[itemprop="ratingValue"]').innerText;
        let avaliacao = document.querySelector('span[itemprop="ratingCount"]').innerText;

        return{
            titulo,
            nota,
            avaliacao,
        }
    })

    console.log(dados);
    debugger;

    await browser.close();
})();
