// Login Start
const databaseUser = {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password')
}


const loginInput = document.querySelectorAll(".form-control");
const loginForm = document.querySelector('form');
const myalert = document.querySelector('#myalert');

const authLogin = (e) => {
    e.preventDefault();
    if (!loginInput[0].value || !loginInput[1].value) {
        myalert.innerHTML = 'Please, fill inputs';
        myalert.className = "alert alert-warning";
    } else {
        if (loginInput[0].value === databaseUser.email && loginInput[1].value === databaseUser.password) {
            myalert.innerHTML = 'Login successfull!';
            myalert.className = "alert alert-success";
            window.location.assign('home.html');
            localStorage.setItem('login',"true");

        } else {
            myalert.innerHTML = 'Email or password is wrong!';
            myalert.className = "alert alert-danger ";
        }
    }
}

loginForm.onsubmit = authLogin;
// Login End