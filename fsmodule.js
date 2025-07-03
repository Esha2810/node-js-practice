// const { error } = require('console')
const fs = require('fs')

// fs.readFile('file.txt', 'utf8', (err, data)=>{
    // console.log(err, data)
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())


// fs.writeFile('file.txt',"This is a data", ()=>{
    // console.log("Written to the file!")
// });

const a = fs.writeFileSync('file.txt',"This is a data")
console.log(a)
console.log("Finished reading file!")