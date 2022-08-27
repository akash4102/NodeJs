const request=require("request");
const cheerio=require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";

request(url,cb);
function cb(err,response,html){
    if(err)console.log(err);
    else extractHTML(html);
}

function extractHTML(html){
    let $=cheerio.load(html);
    // let teamsArr= $(".ci-team-score");
    let teamsArr= $(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-mb-2");
    for(let i=0;i<teamsArr.length;i++){
        let hasclass1=$(teamsArr[i]).hasClass("ds-opacity-50");
        if(hasclass1==false){
            let teamName=$(teamsArr[i]).find(".ds-text-tight-l");
            let team=$(teamName).text();
            let newhtml=$(teamName).html();
            console.log(team);
            // console.log(newhtml);
            // let name=$(teamsArr[i]).text();
            // console.log("winning team is ",name);
            // let newhtml=$(teamsArr[i]).html();
            // console.log("html is ",newhtml);
        }
    }
}