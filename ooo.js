// // Synchronous
// const {readFileSync, writeFileSync, read} = require('fs');

// const first = readFileSync('./first.txt', 'utf8')
// const second = readFileSync('./second.txt', 'utf8')

// writeFileSync(
//     './reuslt-sync.txt',
//     `New file text: ${first}, \n ${second}`,
//     { flag: 'a' } // the a flag tells the program to update whatever is already in the file
// )

// Asynchronous
const { readFile, writeFile} = require('fs')

console.log('Start')
readFile('./first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result

        console.log('Starting this task')
        writeFile('./result-async.txt', `Results: ${first} \n ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('On to the next one')