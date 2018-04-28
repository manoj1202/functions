// challenge

let tipTotal = function(total, tip = .2) {
    let aVal = total * tip;
    return `A ${tip*100}% on Bill Amount ${total} would be ${aVal} `
}
let val1 = tipTotal(100);
console.log(val1);
let val2 = tipTotal(58, .52);
console.log(val2);

