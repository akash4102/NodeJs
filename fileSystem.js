let fs=require('fs');

//files -> create,read,update,delete

// let buffer=fs.readFileSync("abc.js") //gives binary data of this file
// console.log("binary data  "+buffer);

//create
// fs.openSync("abc.txt","w");

//no file-. create and  file exist->content replace
//create adn write
// fs.writeFileSync("abc.txt","hum aaj khus nhi ha");
//update
// fs.appendFileSync("abc.txt","bhai kuch kyu nhi ha")

// fs.mkdirSync("meriDirectory"); //make new folder

// fs.writeFileSync("meriDirectory/merifile.txt","mera content"); //make file and put some data

// let content=fs.readdirSync("meriDirectory")
// console.table(content)
// for(let i in content){
//     console.log("file ",content[i], " is deleted")
//     fs.unlinkSync("meriDirectory/"+content[i]);
// }
// console.table(content)
// fs.rmdirSync("meriDirectory");//remove whole folder

// fs.existSync -> if a file exist at a path->true/false;
// fs.lstatSync->fs.lst;

// let doespathexit=fs.existsSync("abc.txt");
// console.log(doespathexit);
// let doespathexit2=fs.existsSync("abcd.txt");
// console.log(doespathexit2)

// let detailObj=fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans=detailObj.isFile();
// console.log(ans);
// ans=detailObj.isDirectory();
// console.log(ans);

for(let i=1;i<=10;i++){
    let dirPathToMake=`Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake+"\\"+"readme.md",` # readme for ${dirPathToMake}`);
}