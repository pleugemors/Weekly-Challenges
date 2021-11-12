"use strict";


function trackRobot(North = 0, East = 0, South = 0, West = 0){
    let starting = [0,0];
    starting[0] += East - West;
    starting[1] += North - South;
    return starting;
}

console.log(trackRobot()); //➞ [0, 0]
// No movement means the robot stays at (0, 0).

console.log(trackRobot(-10, 20, 10)); //➞ [20, -20]
// The amount to move can be negative.


function vendingMachine(products, moneyGiven, productId){
    let changeAmounts = [500, 200, 100, 50, 20, 10];
    let change = [];
    
    if (productId == 0 || productId > products.length){
        return "Enter a valid product number";
    }
    if(products[productId-1][1] > moneyGiven){
        return "Not enough money for this product"
    }
    let difference = moneyGiven - products[productId-1][1];
    for(let i = 0; i < changeAmounts.length; i++){
        while (difference >= changeAmounts[i]){
            difference -= changeAmounts[i];
            change.push(changeAmounts[i])
        }
    }

    return `{product: " ${products[productId-1][0]} ", change: ${change} }`

}

let products = [["Energy Drink",300],["Soft Drink",250],["Sports Drink",350],["Water",300],["Candy Bar",220],["Chewing Gum",180],["Crackers",120]];
console.log(vendingMachine(products, 200, 7)); //--> { product: "Crackers", change: [ 50, 20, 10 ] }

console.log(vendingMachine(products, 500, 0)); //--> "Enter a valid product number"

console.log(vendingMachine(products, 90, 1) );//--> "Not enough money for this product"