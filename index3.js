let p=localStorage.getItem('Place');
let b=localStorage.getItem('BHK');
let d=localStorage.getItem('Date');
document.querySelector('#plc-4').innerHTML = `${p} |`;
document.querySelector('#date-4').innerHTML = `${d} |`;
document.querySelector('#bhk-4').innerHTML = `${b} `;
console.log(p);
console.log(b);
console.log(d);

