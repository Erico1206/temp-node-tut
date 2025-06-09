const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', //kalau gaada file dengan nama itu, dia akan bikin file baru, dengan isi dibawah
    `Here is the result ${first}, ${second}`, //kalau sampai sini aja dia akan overwrite apapun text yang ada di file itu
    {flag : 'a'} //kasih ini kalau mau append / tambahkan text, tidak overwrite
)

console.log('done with the task')
console.log('starting the next one')

//sync basically mengerjakan code line by line, jadi mau callbacknya panjang atau ngga tetap line by line
//bandingkan dengan node 11