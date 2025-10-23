// Reduce method =>

const myNums = [1, 2, 3, 4]

//const myTotal = myNums.reduce( function(acc, currval) {
//    console.log("acc: " + acc + " and " + "currval: " + currval)
//    return acc + currval;
//}, 0)

//console.log(myTotal);

//const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)

//console.log(myTotal);


const subscription = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "Java course",
        price : 3999
    },
    {
        itemName : "DSA course",
        price : 5999
    },
    {
        itemName : "Web Dev course",
        price : 12999
    }
]

const priceToPay = subscription.reduce( (acc ,item) => acc + item.price, 0)

console.log(priceToPay);