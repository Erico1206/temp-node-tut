module.exports.items = ['item 1', 'item 2']
//sama aja dengan bikin items jadi variable dulu pake const 
//baru di module di line yang terpisah, cuma cara beda

const person = {
    name : 'bob'
}

module.exports.singlePerson = person

console.log(module)

//disini exports jadi punya dua properti items dan singlePerson, cek di console