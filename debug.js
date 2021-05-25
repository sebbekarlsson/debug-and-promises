function add(x, y) {
    return x + y;
}


// (x + y) * (x + y)
function multiply_and_add(x, y) {
    const result1 = add(x, y);
    const result2 = result1 * result1;    // add(x, y) * add(x, y)
    return result2;
}


const number1 = 10;
const number2 = 100;

const result = multiply_and_add(number1, number2); // 12100


console.log(result);