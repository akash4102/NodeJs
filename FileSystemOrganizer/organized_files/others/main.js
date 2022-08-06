let inputArr=process.argv.slice(2);
let fs=require("fs");
let path=require("path");
// console.log(inputArr)
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command=inputArr[0];
let types={
    media: ["mp4",'mkv'],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz'],
    document: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps'],
    app: ['exe','dmg','pkg','deb']
}
switch(command){
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("please Input right command");
        break;
}
function treeFn(dirPath){
    console.log("Tree Command implement for ",dirPath);
}
function organizeFn(dirPath){
    // console.log("Tree Command implement for ",dirPath);
    // 1. input->directory path given
    let desPath
    if(dirPath==undefined){
        console.log("kindly enter the path");
        return;
    }
    else{
        let doesExist=fs.existsSync(dirPath);
        if(doesExist){
            // 2. create -> organized_files->directory
            desPath=path.join(dirPath,"organized_files");
            // console.log(desPath)
            if(fs.existsSync(desPath)==false)fs.mkdirSync(desPath);
        }
        else{
            console.log("kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath,desPath);
}
function organizeHelper(src,dest){
    // 3. identify category of all files present in that input directory -> 
    let childNames=fs.readdirSync(src);
    // console.log(childName);
    for(let i=0;i<childNames.length;i++){
        let childAddress=path.join(src,childNames[i]);
        let isFile=fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i])
            // 4. copy / cut files to that organized directory inside of any of category folder
            let category=getCategory(childNames[i])
            console.log(childNames[i],"belongs to -> ",category)
            sendFiles(childAddress,dest,category)
        }
    }
    

}
function sendFiles(srcFilepath,dest,category){
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false) {
        fs.mkdirSync(categoryPath);
    }
    let filename=path.basename(srcFilepath);
    let destFilePath=path.join(categoryPath,filename);
    fs.copyFileSync(srcFilepath,destFilePath);
    console.log(filename," copied to ",category)

}
function getCategory(name){
    let ext=path.extname(name)
    // console.log(ext)
    ext=ext.slice(1);
    for(let type in types){
        let cTypeArray=types[type];
        for(let i=0;i<cTypeArray.length;i++){
            if(ext==cTypeArray){
                return type;
            }
        }
    }
    return "others"
}
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

