// for loop

//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
    
//}

//for (let i = 0; i <=5; i++) {
//    console.log("Outer Loop Value:", i);
//    for (let j = 0; j <=5 ; j++) {
//       console.log("Inner Loop Value:", j + " and Outer loop:", i);     
//    } 
//}

//let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);

//for (let i = 0; i < myArray.length; i++) {
//    const element = myArray[i];
//    console.log(element);   
//}


// +++++++++++++++++++++++++++++++++++ Break and Continue ++++++++++++++++++++++++++++++++++++++++ //

//for (let i = 0; i < 20; i++) {
//   if (i == 5) {
//        console.log("Dectected 5");
//        break;  // jese hi break execute hoa hai ham pure control flow ke bahr aa jate hain. yha flow for loop se start hain.
//    }    
//    console.log("value of i is:" + i);
//}


// Continue : Ek galti maaf.

for (let i = 0; i < 20; i++) {
    if (i == 5) {
        console.log("Dectected 5");
        continue;
    }    
    console.log("value of i is: " + i);
}
