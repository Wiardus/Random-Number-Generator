 function generateNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let number = Math.floor(Math.random() * (max-min) + min);  
    document.getElementById("display").innerHTML = number; 
} 

console.log(generateNumber(1, 10));


// Earlier attempt that I commented out 
// document.getElementsByClassName("display") += generateNumber(1, 10);

/* function generateNumber(int) {
   return Math.floor(Math.random() * int);
   // document.getElementsByClassName("display").innerHTML += number;
 
}
console.log(generateNumber(5)); */