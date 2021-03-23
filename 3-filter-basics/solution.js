const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

const filterdGrades = grades.filter((number, index) => {
    if(number < 3)
    return grades
})
console.log(filterdGrades);

const filterdGrades2 = grades.filter((number, index) => {
    if(number > 3)
    return grades
})
console.log(filterdGrades2);