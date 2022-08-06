let cp=require("child_process");
// console.log("trying to open calculator")
// // cp.execSync("calc")
// // cp.execSync("code")
// cp.execSync("start chrome https:\\www.pepcoding.com");
// console.log("opened calculator")
let output=cp.execSync("node abc.js");
console.log("output "+output);