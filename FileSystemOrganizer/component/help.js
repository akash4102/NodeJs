let fs=require("fs");
let path=require("path");
function helpFn(dirPath){
    console.log(`
    List of all the commands:
    hii
    hlo
    so
    les 
    nodfs a
    df adfja
    `);
}
module.exports={
    helpKey:helpFn
}