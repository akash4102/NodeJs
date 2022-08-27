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
    let wteamName;
    for(let i=0;i<teamsArr.length;i++){
        let hasclass1=$(teamsArr[i]).hasClass("ds-opacity-50");
        if(hasclass1==false){
            let teamName=$(teamsArr[i]).find(".ds-text-tight-l");
            wteamName=$(teamName).text();
            // let newhtml=$(teamName).html();
            // console.log(team);
        }
    }
    // let inningsArr=$(".ReactCollapse--collapse");
    let inningsArr=$(".ds-bg-fill-content-prime.ds-rounded-lg");
    // let htmlstr="";
    for(let i=0;i<inningsArr.length;i++){
        // let chtml=$(inningsArr[i]).html();
        // htmlstr+=chtml;
        //team names
        let teamNameElen=$(inningsArr[i]).find(".ds-text-tight-s.ds-font-bold.ds-uppercase");
        // let teamNameElen=$(inningsArr[i]).find(".ds-mt-3 .ds-text-tight-s.ds-font-bold.ds-uppercase");
        let teamsName=teamNameElen.text();
        teamsName=teamsName.split("INNINGS")[0];
        teamsName=teamsName.trim();
        // console.log(teamsName);
        if(wteamName==teamsName){
            // console.log(teamsName);
            let tableElem=$(teamsName).find(".ds-w-full.ds-table.ds-table-md.ds-table-auto");
            let tablerows=$(tableElem).find("tr");
            let tablerowsdata=tablerows.text();
            console.log(tablerowsdata);
        }
    }
    // console.log(htmlstr);
}