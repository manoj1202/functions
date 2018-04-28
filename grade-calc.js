// studnet score, total possible score
//15/20 -> you got a C(75%)!
// A 90-100, B 80-89 ,C 70-79, D 60-69, F 0-59

let grade = function(studentScore,TotalScore){
    let per = (studentScore / TotalScore) * 100;
    if(per >= 90 && per <= 100){
        return `${studentScore}/${TotalScore} -> You Got a A(${per}%)!`
    } else if (per >= 80 && per < 90){
        return `${studentScore}/${TotalScore} -> You Got a B(${per}%)!`
    } else if (per >= 70 && per < 80) {
        return `${studentScore}/${TotalScore} -> You Got a C(${per}%)!`
    } else if (per >= 60 && per < 70) {
        return `${studentScore}/${TotalScore} -> You Got a D(${per}%)!`
    }else if(per >= 0 && per <= 59){
        return `${studentScore}/${TotalScore} -> You Got a F(${per}%)!`
    } else {
        return 'Please enter valid score values'
    }
}

let g1 = grade(90, 100);
console.log( g1 );
console.log('-------------------------------------');
let g2 = grade(45, 100);
console.log(g2);
console.log('-------------------------------------');