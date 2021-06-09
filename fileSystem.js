const fs = require('fs');

// console.log(fs)

// reading files 
fs.readFile('./docs/file.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
    console.log(data.toString())
})