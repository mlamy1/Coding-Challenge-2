// Task 1: Calculating the Tip

var  x = 88; // X = bill  

var tip = (x >= 50 && x <= 300 ? x * .15 : x * .20);  
console.log(tip); 
// If the bill is between 50 and 300, tip is 15%.  Otherwise, the tip is 20%. 


// Task 2: Output Details

var total = x + tip;
console.log(`The bill was $${x}, the tip was $${tip}, and the total value is $${total}`);


//Task 3: Create a Function


function calculateTip(bill) {
    return(bill >= 50 && bill <= 300) ? bill * .15 : bill * .20;
}

let bill = 100; 
let newtip = calculateTip(bill);
console.log (`The bill was $${bill}, the tip was $${newtip}, and the total value is $${bill + newtip}`)
// This function accepts any bill amount as input and returns the calculated tip.  

// Task 4: Utilize Arrays

function caclulatetip(bill) {
    return(bill >= 50 && bill <= 300) ? bill * .15 : bill * .20;
}

// Data set 1
let bills = [275, 40, 430];
let tips = bills.map(calculateTip);
let totals = bills.map((bills,index) => bills + tips[index]);

bills.forEach((bill,index) => {
    console.log(`The bill was $${bill}, the tip was $${tips[index]}, and the total value is $${totals[index]}`);
}); 

// Data set 2

function caclulatetip(bill) {
    return(bill >= 50 && bill <= 300) ? bill * .15 : bill * .20;
}

let bills2 = [125, 555, 44];
let tips2 = bills2.map(calculateTip);
let totals2 = bills2.map((bills2,index) => bills2 + tips2[index]);

bills2.forEach((bills2,index) => {
    console.log(`The bill was $${bills2}, the tip was $${tips2[index]}, and the total value is $${totals2[index]}`);
}); 

// This calculates the tips and totals for multiple bills. 