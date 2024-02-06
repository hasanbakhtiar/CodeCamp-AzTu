const formInput = document.querySelectorAll('.form-control');




(function () {
    emailjs.init({
        publicKey: "cVBf7nQwR9JgBlZoL",
    });
})();


window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
       if (localStorage.getItem('login') === "true") {
        
      if (!formInput[4].value) {
                alert('please write message');
      }else{
        formInput[0].value = localStorage.getItem('fullname');
        formInput[3].value = localStorage.getItem('email');

       
            emailjs.sendForm('service_3ard6mf', 'template_djhmafn', this)
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
      }
    

       }else{
        if (!formInput[0].value || !formInput[1].value || !formInput[2].value || !formInput[3].value || !formInput[4].value) {
            alert('fill out input')
        } else {
            emailjs.sendForm('service_3ard6mf', 'template_djhmafn', this)
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
        }
       }
    });

}




