const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const times2 = numbers.map((number) => {
    return number * 2;
})

console.log(times2)

const divided2 = numbers.map((number) => {
    return number / 2;
})

console.log(divided2)

const divided = numbers.map((number) => {
    return number * number;
})

console.log(divided)