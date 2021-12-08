let x, b, d;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let today1 = yyyy + '-' + mm + '-' + dd;
yyyy = yyyy + 1;
let date2 = yyyy + '-' + mm + '-' + dd;
console.log(today1);
console.log(date2);
document.querySelector('#date-range').min = today1;
document.querySelector('#date-range').max = date2;
document.querySelector('#search').addEventListener('click', function (e) {
    e.preventDefault();
    x = document.querySelector('#dropdownMenu1').value;
    b = document.querySelector('#dropdownMenu2').value;
    d = document.querySelector('#date-range').value;
    console.log(x);
    console.log(b);
    console.log(d);
    console.log(today1);
    if (x =='Select Location'|| b == 'Bedroom Kitchen' || d == null) {
        alert('Please Select The options');
    }
    else {
            localStorage.setItem('Place', x);
            localStorage.setItem('BHK', b);
            localStorage.setItem('Date', d);
            if(x=='Kolkata')
            location.href = 'Kolkata.html';
            if(x=='Mumbai')
            location.href = 'Mumbai.html';
        if (x == 'Bangalore')
            location.href = 'Mumbai.html';
    }
})
document.querySelector('body').addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        console.log(x);
        console.log(b);
        console.log(d);
        if (x == null || b == 'Bedroom Kitchen' || d == null) {
            alert('Please Select The options');
        }
        else {
                localStorage.setItem('Place', x);
                localStorage.setItem('BHK', b);
                localStorage.setItem('Date', d);
                location.href = 'Kolkata.html';
           
        }
    }
})


