// Two ways to export objects

// 1
const items = ['item1', 'item2']

// 2
module.exports.items = ['item1', 'item2']

// You can also use a different name for an object when assigning it as a module.exports property
const person = {
    name: 'bob',
}
module.exports.singlePerson = person

