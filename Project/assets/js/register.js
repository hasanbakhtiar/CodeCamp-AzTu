const formInput = document.querySelectorAll(".form-control");
const form = document.querySelector('form');
const myalert = document.querySelector('#myalert');

const register = (e) => {
    e.preventDefault();
    if (!formInput[0].value || !formInput[1].value || !formInput[2].value || !formInput[3].value || !formInput[4].value) {
        myalert.innerHTML = 'Please, fill inputs';
        myalert.className = "alert alert-warning";
    } else {
        if (formInput[3].value != formInput[4].value) {
            myalert.innerHTML = 'Password is different!';
            myalert.className = "alert alert-danger";
        } else {
            myalert.innerHTML = 'Register is successfull!';
            myalert.className = "alert alert-success";
            localStorage.setItem('fullname',formInput[0].value);
            localStorage.setItem('email',formInput[2].value);
            localStorage.setItem('password',formInput[3].value);
            localStorage.setItem('login',"false");
            window.location.assign('login.html');
        }
    }


}
form.onsubmit = register;



