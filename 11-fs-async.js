const { readFile, writeFile } = require('fs');

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err)
        return
    } 
    const first = result
    console.log(first)
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        } 
    const second = result
    console.log(second)
    writeFile(
        './content/result-async.txt', 
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if(err) {
                console.log(err)
                return;
            }
            console.log('done with the task')
        })  
    })
})
console.log('starting next task')

//async mengerjakan banyak sekaligus jadi ketika ada fungsi callback yang panjang saat bersamaan code diluar callback akan dikerjakan juga
// bandingkan dengan node 10
