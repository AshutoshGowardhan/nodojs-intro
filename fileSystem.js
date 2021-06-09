const fs = require('fs');

// console.log(fs)

// reading files, this is asynchronous, it will not block the code
// fs.readFile('./docs/file.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
//     console.log(data.toString())
// })


// // writing to file
// fs.writeFile('./docs/blog1.txt', 'hello world', () => {
//     console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt', 'hello world, no file exits', () => {
//     console.log('file was written')
// })

//Directories
if (!fs.existsSync('./assests')) {
    fs.mkdir('./assests', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./assests', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}
