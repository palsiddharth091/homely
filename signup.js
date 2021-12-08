console.log('Sign Up ');
const email = [];
const password = [];
console.log(email.length);
let em, pwd, copwd, i = 0;
document.querySelector('#signup').addEventListener('click', function signup(e) {
    e.preventDefault();
    em = document.querySelector('#email').value;
    pwd = document.querySelector('#password').value;
    copwd = document.querySelector('#confirmpassword').value;
    if (em != '' && pwd != '' && copwd != '') {
        if(pwd.length>=8)
        {
            if (copwd == pwd) {
                email[i] = em;
                password[i] = pwd;
                location.href = 'index2.html';
                i++;
                confirm('You have signed up successfully');
            }
            else {
                alert('Password Dont match please try again');
            }
        }
        else
        {
            alert('Password is too small');
        }
       
    }
    else
    {
        alert('Please Fill all the details');
    }

})