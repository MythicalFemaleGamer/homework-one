//Dating
let ticketNum = 3;
let ticketCost = 14;
let ttCost = ticketCost*ticketNum;
console.log("The total cost is: " + ttCost);

//Shopping
let budget = 235.87;
let jacket = 70;
let sweater = 55;
let shirt = 35;
let pants = 75;
let skirt = 49;
let sandals = 30;
let shoes = 60

let purchase = shirt + pants + shoes;
let balance = purchase - budget;

if(balance>=70){
    console.log("True");
}else{
    console.log("False");
}

//pizza
let wholePizza = 4;
let slicesPerPizza = 8;
let slicesPerStudent = 2.5;
let totalSlices = wholePizza*slicesPerPizza;
let totalStudentsFed = totalSlices/slicesPerStudent;
let pizzaForRector = totalSlices%slicesPerStudent;

console.log("Total amount of students that will be fed: "+ totalStudentsFed);
console.log("Leftovers for Rector: " + pizzaForRector);

//clearfix
let adultMeal = 12
let childMeal = 6
let drinks = 1.5
let reciept = (2*adultMeal)+(childMeal)+(3*drinks);
console.log(reciept);

//tips
let weekOne = 202.45;
let weekTwo = 134.97;
let weekThree = 256.63;
let weekFour = 178.22;
let weeklyAverage = (weekFour+weekOne+weekThree+weekTwo)/4;
console.log(weeklyAverage);