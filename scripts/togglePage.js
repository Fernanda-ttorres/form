var register = document.getElementById('register-btn');
var goBack = document.getElementById('goBack-btn');
var form = document.querySelector('.singUp-form');

register.addEventListener("click", function(event){
    event.preventDefault();

    document.getElementById('sucess').style.display = 'flex';
    document.getElementById('singUp').style.display = 'none';

    form.reset();
});

goBack.addEventListener("click", function(){ 

    document.getElementById('singUp').style.display = 'flex';
    document.getElementById('sucess').style.display = 'none';
   
});








