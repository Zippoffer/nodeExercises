// This parse-args file should export a single function to parse your command line arguments.
// The function should accept an array containing the arguments passed on the command line.
// Convert these arguments to an object with a count and sides property.



module.exports = function(args) {
    let count = args[0]
    let sides = args[1]
    return {
        count, sides
    }
}
