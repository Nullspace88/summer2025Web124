// Brendan O'Connor 6/9/2025
let myName = "Brendan O'Connor";
let para1 = document.getElementById("p1");
para1.textContent = myName;

let n1 = 21;
let n2 = 35;
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

let myNameMultNum = myName * n2;
document.getElementById("p5").textContent = myNameMultNum;

let ageCompare = 32 >= numberMult;
document.getElementById("p6").textContent = ageCompare;
