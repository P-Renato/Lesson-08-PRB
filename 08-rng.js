/*
We need to build a function that recieves a max number 
and generates a reandom number between 1 and this max value that it recieves and RETURNS the random number
*/

function rng( max ){
    return Math.floor( Math.random() * max ) + 1
}

// We need to expose the rng function so it can be imported 
export default rng