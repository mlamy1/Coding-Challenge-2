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