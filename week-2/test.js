let counter = 0;

function counterFunction() {
  console.log(counter);
  counter++;
}

// Pass a function reference to setInterval, not the result of the function
setTimeout(()=>console.log('hello'), 1000);
