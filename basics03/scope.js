//var c = 5

/*if (true) {
    let a = 1;
    const b = 2;
    var c = 4;
}
*/

//console.log(c);
//console.log(a);  => error


/*function one() {
    const name = "hitesh";

    function two() {
        const platForm = "Youtube";
        console.log(name);
    }
    //console.log(platForm);  => error1 :platForm is not defined

    two();  

//one();   */

// NOTE : AGR HAM UPR WALE CODE KO RUN KARENGE TOH O/P MEIN KUCH NHI AYEGA => CODE RUN HOGA PR KOI O/P NHI HOGA

/*function one() {
    const name = "hitesh";

    function two() {
        const platForm = "Youtube";
        console.log(name);
    }
    //console.log(platForm);  => error1 :platForm is not defined

    two();  // o/p: hitesh
}

one();   // NOTE: AGR HAMNE ONE() KO COMMENT OUT KAR DIYA TOH BHI O/P MEIN KUCH NAHI AYEGA
         // NOTE: AGR HAMNE TWO() KO COMMENT OUT KAR DIYA TOH BHI O/P MEIN KUCH NAHI AYEGA

*/

// ++++++++++++++++++++++++++ INTERESTING CONCEPT ++++++++++++++++++//

//addNum(10);
//console.log(addNum(10));
function addNum(num) {
    return num + 1;
}

//addNum(10);
//console.log(addNum(10));

//ans(20);   // error : ReferenceError: Cannot access 'ans' before initialization

const ans = function addTwo(num) {
    return num + 1;
} 

/*const ans = function(num) {
    return num + 1;
}*/

//ans(20);
console.log(ans(20));