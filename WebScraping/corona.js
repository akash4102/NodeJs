const request = require('request');
const cheerio = require('cheerio');
console.log("before");
request('https://www.cricbuzz.com/live-cricket-scores/49864/zim-vs-ind-2nd-odi-india-tour-of-zimbabwe-2022',cb) ;
function cb(error, response, html) {
    if(error)console.error('error:', error);
    else{
        handlehtml(html);
        // console.log('html:', html);
    } 
  };
function handlehtml(html){
    let selTool=cheerio.load(html);
    // let h1s=selTool("h1");
    // let contentArr=selTool("#maincounter-wrap span");
    let contentArr=selTool(".cb-link-undrln");
    // for(let i=0;i<contentArr.length;i++){
    //     let data=selTool(contentArr[i]).text();
    //     console.log("data", data)
    // }
    // let total = selTool(contentArr[0]).text();
    // let deaths=selTool(contentArr[1]).text();
    // let recoverd=selTool(contentArr[2]).text();
    // console.log(("total Cases"+total));
    // console.log(("total death"+deaths));
    // console.log(("recovered"+recoverd));
    console.log(typeof(contentArr));
    let playerofthematch=selTool(contentArr[0]).text();
    console.log(playerofthematch);
    // console.log(h1s.length);
}