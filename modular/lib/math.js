const randomInt = (numberOfDice, sizeOfDice) => {
    numberOfDice = parseInt(numberOfDice)
    sizeOfDice = parseInt(sizeOfDice)
    return Math.floor(Math.random() * (sizeOfDice * numberOfDice) - numberOfDice + 1) + numberOfDice; //standard Random Number Generator with inclusive top value
};


module.exports = {
    randomInt
}
