const add = (x,y) => {
    return x+y;
}

const subtract = (x,y) => {
    return x-y;
}

const multiply = (x,y) => {
    return x*y;
}

const divide = (x,y) => {
    return x/y;
}

const squareRoot = (x) => {
    return Math.sqrt(x);
}

const max = (x,y) => {
    return Math.max(x);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    max
}