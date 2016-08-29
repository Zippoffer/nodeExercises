const {
    randomInt
} = require('../lib/math')



function roll(dice) {

    let diceNoteArray = dice.split('d')
    let [count, sides] = diceNoteArray
    return randomInt(count, sides)

}

function toDiceNotation(obj) {
    if (obj.sides === undefined && obj.count === undefined) {
        obj.sides = 6
        obj.count = 1
    }
    return `${obj.count}d${obj.sides}`
}




module.exports = {
    roll, toDiceNotation
}




// The dice file should export an object with at least two methods called
//  roll and toDiceNotation. 

//  The toDiceNotation method should accept an object with a sides and count property
//   and convert it to a String with the dice notation i.e. "1d6" or "2d40". 

//   The roll method should accept a dice notation String and produce a random Number which is the result
//    of the dice roll
