// Task 1: Calculating the Tip

var  x = 88; // X = bill  

var tip = (x >= 50 && x <= 300 ? x * .15 : x * .20);  
console.log(tip); 
// If the bill is between 50 and 300, tip is 15%.  Otherwise, the tip is 20%. 


// Task 2: Output Details

var total = x + tip;
console.log(`The bill was $${x}, the tip was $${tip}, and the total value is $${total}`);
