import * as fs from "node:fs";

console.log("program start");
// for synchronous file reading
// console.log(fs.readFileSync('file.txt','utf-8'));

// for asynchronous file reading

fs.readFile("file.txt", "utf-8", (err, txt) => {
  if (err) {
    console.log("Something Went Wrong !!!");
  } else {
    console.log(txt);
  }
});
console.log("program end");

