# Project 1
## Solution Code
``` javascript
console.log("Sachin);

const buttons = document.querySelectorAll('.button');
//console.log(buttons);

const body = document.querySelector('body');

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id == 'grey') {
      //body.style.backgroundColor = 'grey';
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## Project 3

```javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock');
// Both will give the same output.

// setInterval() method ka use krna hain or isme 2 argument paas krna hain. || 1st function() and 2nd value.

// setInterval() fun ka use ham isliye kr rhe hain kyunki ham chahte hain time/value har second pr update ho.

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```