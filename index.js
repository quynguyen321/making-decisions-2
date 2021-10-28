let backpackitem1 = `stapler`;
let backpackitem2 = `mug`;
let backpackitem3 = `pencil`;
let backpackitem4 = `extra hat`; 
let backpackitem5 = `mouse plushie`;

//const backpackitems =[]
const backpackitems = [
  `stapler`,
  `mug`,
  `pencil`,
  `extra hat`,
  `mouse plushie`,
]
if (backpackitems.length === 0) {
    backpackitems.unshift(`stick`)
}

console.log(backpackitems, backpackitems.length)
console.log(backpackitems.length + 10)

//array methods
//backpackitems.push(`pillow)`);
//backpackitems.push(`saw`)
backpackitems.push(`pillow`, `saw`)

backpackitems.splice(2, 1)
//const removeditem = backpackitems.splice(3, 1, `hamster plushie`)
//console.log(`I have removed` + removeditem+ `!`)

console.log(`I have removed` + backpackitems.splice(3, 1, `hamster plushie`)+ `!`)

backpackitems.pop();

backpackitems.splice(backpackitems.length - 2)

backpackitems.shift();

console.log(backpackitems)

backpackitems.push(`shoes`, `shirt`, `eggplant`)
console.log(backpackitems)

const buddybackpack = backpackitems.slice(1)

console.log(buddybackpack)

//for loop and arrays

const randomitem = backpackitems[1]
//console.log(randomitem)

console.log(backpackitems)

for(let i = 0; i < backpackitems.length; i++) {
   // console.log(typeof i, i)
   //console.log(backpackitems[i])
if (backpackitems[i].startsWith(`e`)) {
    console.log(backpackitems[i])

}
}