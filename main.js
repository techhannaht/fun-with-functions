// Anatomy of a function

// 1st way to make a function
function taco() {
    console.log("i'm hungry!")
}

// 2nd way to make a function
const milkshakes = () => {
    console.log("cookies n cream are the best!")
}

// execuse / call / use / invoke the function 

taco()

milkshakes ()

// Nouns - that means we have a return 

const makeAString = () => {



    return "I'm might make pasta."
}

const storageVariable = makeAString()

console.log(storageVariable)

// Verbs - they do stuff

const postToDom = () => {
    const htmlString = `<h1>Hello, I'm an ACTION function</h1>`

    document.querySelector(".pickMe").innerHTML = htmlString
}

postToDom()

// Parameters (when creating the function) VS Arguments (when invoking the function)

const addition = (number1, number2) => {
    
    return number1 + number2
}

const totalSum = addition(77,9089)
console.log(totalSum)


// Step 1) Make a function that returns the difference of two values 

const subtraction = (number1, number2) => {
    
    return number1 - number2
}

const totalDifference = subtraction(100,5)
console.log(totalDifference)

// Step 2) Make a function that prints that value to the dom

const postMath = () => {
    const htmlString = `The difference of 100 - 5 is ${totalDifference}.`

    document.querySelector(".mathProbz").innerHTML = htmlString
}

postMath()