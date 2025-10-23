//+++++++++++++++++++++++++++++++++++  IIFE  +++++++++++++++++++++++++++++++++++++++++++// Imeadiately Invoked Function Expressions

(function chai1() {
    // named IIFE : KYUNKI HAMNE YHA FUN KA NAAM DIYA HUA HAIN
    console.log("DB connected");
}) ();      // () THIS IS HERE USED FOR FUN CALL


( () => {
    console.log("DB connected two");
}) ();

( (name) => {
    console.log('DB connected:' , name);
}) ("sachin");