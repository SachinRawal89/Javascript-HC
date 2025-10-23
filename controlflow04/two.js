//switch (key) {
//    case value:
        
//        break;

//    default:
//        break;
//}

const month = 6;

switch (month) {
    case 1:
        console.log("Jan")
        //break;                     // break ka use jruri hai vrna jab bhi condition match hogi uske baad ka sara code
                                  //  execute ho jayega default case ko chor kr.
    
    case 2:
        console.log("Feb")
        //break;

    case 3:
        console.log("March")
        //break;

    case 4:
        console.log("April")
        //break;

    case 5:
        console.log("May")
        //break;

    case 6:
        console.log("June")
        //break;

    case 7:
        console.log("July")
        //break;

    case 8:
        console.log("Aug")
        //break;

    case 9:
        console.log("September")
        //break;

    default:
        console.log("dafalut month")
        //break;
}


// NOTE 2000/- => if we don't use the break key word then, when the value matches all the below statements are run.
//June
//July
//Aug
//September
//dafalut month
