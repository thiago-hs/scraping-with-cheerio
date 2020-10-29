const axios = require("axios");
const cheerio = require("cheerio");

(async () => {

    async function fetchHTML(url){

        try {
    
            const { data } = await axios.get(url);
        
            return cheerio.load(data);
    
        } catch (error) {
    
            throw new Error('Invalid URL');
            console.error(error);
    
        }
    
    }
    
    const [ ,,argURL ] = process.argv;

    const $ = await fetchHTML(argURL || "https://example.com")
    
    // full HTML
    console.log(`Site HTML: ${$.html()} \n\n`)
    
    // specific content
    console.log(`First h1 tag: ${$('h1').text()}`)
    console.log(`First p tag: ${$('p').text()}`)

})();

