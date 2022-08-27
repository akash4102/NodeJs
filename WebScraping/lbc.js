const request=require("request");
const cheerio=require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let $=cheerio.load(html);
    let elemsArr= $(".ci-html-content");
    let text=$(elemsArr[10]).text();
    let htmldata=$(elemsArr[10]).html();
    console.log("text data ",text);
    console.log("html data ",htmldata);
}
