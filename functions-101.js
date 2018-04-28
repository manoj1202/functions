//Function - Arguments ,code ,Return values

let Square = function(num){
    let result = num * num;
    return result;
}

let value1 = Square(3);
let value2 = Square(10);

console.log(value1);
console.log(value2 );


//challenge

let temp = function(num){
    let cel = (num-32)*5/9;
    return cel;
}

let temp1 = temp(32);
let temp2 = temp(68);
console.log("-----------------------------------");
console.log(temp1 + 'C');
console.log(temp2 + 'C');