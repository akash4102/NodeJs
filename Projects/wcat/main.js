let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let readline = require("readline");

let command = inputArr[0];
switch (command) {
  case "-s":
    let i = 1;
    let n = inputArr.length;
    if(fs.existsSync(inputArr[1]) && inputArr[2]== ">" ){
      saveremovingspaces(inputArr[1],inputArr[3]);
    }
    while (i < n) {
      processLineByLine(inputArr[i]);
      i++;
    }
    console.log(
      "this command is for converting big line breaks into a singular line break"
    );
    break;
  case "-n":
    let j = 1;
    let k = inputArr.length;
    while (j < k) {
      let temp = inputArr[j];
      if (temp == "-b") {
        console.log("this is not a valid command");
        j++;
        continue;
      }
      addNumbersOnEveryLine(inputArr[j]);
      j++;
    }
    console.log("this command is for giving numbers to all the lines");
    break;
  case "-b":
    let l = 1;
    let m = inputArr.length;
    while (l < m) {
      let temp = inputArr[l];
      if (temp == "-n") {
        console.log("this is not a valid command");
        l++;
        continue;
      }
      addNumbersNonEmtpyLine(inputArr[l]);
      l++;
    }
    console.log("this command is for giving numbers to non empty lines");
    break;
  default:
    if (fs.existsSync(inputArr[0])) {
      if (inputArr[1] == ">") {
        putfile1tofile2(inputArr[0],inputArr[2]);
      }
      if (inputArr[1] == ">>") {
        appendfile1tofile2(inputArr[0],inputArr[2]);
      } 
      else {
        let i = 0;
        let n = inputArr.length;
        while (i < n) {
          pirntFileData(inputArr[i]);
          i++;
        }
      }
    } else {
      console.log("please Input right command");
    }
    break;
}
function saveremovingspaces(srcFile,destFile){
  if(fs.existsSync(destFile)){
    let flag=false;
    fs.readFileSync(srcFile, "utf-8")
      .split(/\r?\n/)
      .forEach(function (line) {
        if (line.length > 0) {
          fs.appendFile(destFile, line);
        }
      });
  }
  else{
    console.log("your file addres is not valid");
  }
}
function putfile1tofile2(srcFile,destFile){
  if(fs.existsSync(destFile)){
    let data = fs.readFileSync(srcFile, 'utf8');
    fs.writeFileSync(destFile, data);
    console.log("done");
  }
  else{
    console.log("your file doesn't exist")
  }
} 
function appendfile1tofile2(srcFile,destFile){
  if(fs.existsSync(destFile)){
    let data = fs.readFileSync(srcFile, 'utf8');
    fs.appendFile(destFile, data);
  }
  else{
    console.log("your file doesn't exist")
  }
    
}
function pirntFileData(fileName) {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    console.log(data);
  } catch (err) {
    // console.error(err);
    console.log(
      fileName + " this file doesn't exist please enter valid file address"
    );
  }
}
function addNumbersNonEmtpyLine(fileName) {
  if (fs.existsSync(fileName)) {
    let i = 1;
    fs.readFileSync(fileName, "utf-8")
      .split(/\r?\n/)
      .forEach(function (line) {
        if (line.length > 0) console.log(`${i++}` + line);
        else console.log(line);
      });
  } else {
    console.log("this file doesn't exist please check file address");
  }
}
function addNumbersOnEveryLine(fileName) {
  if (fs.existsSync(fileName)) {
    let i = 1;
    fs.readFileSync(fileName, "utf-8")
      .split(/\r?\n/)
      .forEach(function (line) {
        console.log(`${i++}` + line);
      });
  } else {
    console.log("this file doesn't exist please check file address");
  }
}
function processLineByLine(fileName) {
  if (fs.existsSync(fileName)) {
    let flag = false;
    fs.readFileSync(fileName, "utf-8")
      .split(/\r?\n/)
      .forEach(function (line) {
        if (line.length > 0) {
          if (flag) {
            console.log("\n");
            console.log(line);
          } else {
            flag = true;
            console.log(line);
          }
        }
      });
  } else {
    console.log("this file doesn't exist please check file address");
  }
}
