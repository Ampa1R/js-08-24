function test (item) 
{
    let name_test  = /^\d+$/g.test(item);

    return name_test;
}

function multiply(a, b) 
{
    if (!test(a) || !test(b)) return 'Введите число';
    else return (a * b);
} 

function division(a, b) 
{
    if (!test(a) || !test(b)) return 'Введите число';
    else return (a / b);
} 

function addition(a, b) 
{
    if (!test(a) || !test(b)) return 'Введите число';
    else return (parseInt(a) + parseInt(b));
} 

function subtraction(a, b) 
{
    if (!test(a) || !test(b)) return 'Введите число';
    else return (a - b);
} 

module.exports = {
    multiply: multiply,
    division: division,
    addition: addition,
    subtraction: subtraction,
};
