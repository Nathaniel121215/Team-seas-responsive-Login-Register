const btn1 = document.querySelector('#register-trigger').addEventListener("click",myfunction1);
const btn2 = document.querySelector('#register-trigger').addEventListener("click",myfunction2);
const showregister = document.querySelector('#login-');
const hidelogin = document.querySelector('#register-');


function myfunction1()
{
    showregister.style.position ="fixed";
    showregister.style.right ="-100%";
    showregister.style.transition ="1s";
}


function myfunction2()
{
    hidelogin.style.position ="relative";
    hidelogin.style.right ="0";
    hidelogin.style.transition ="1s";
}



const btn3 = document.querySelector('#login-trigger').addEventListener("click",myfunction3);
const btn4 = document.querySelector('#login-trigger').addEventListener("click",myfunction4);
const showlogin = document.querySelector('#login-');
const hideregister = document.querySelector('#register-');



function myfunction3()
{
    showlogin.style.position ="relative";
    showlogin.style.right ="0";
    showlogin.style.transition ="1s";
}


function myfunction4()
{
    hideregister.style.position ="fixed";
    hideregister.style.right ="-100%";
    hideregister.style.transition ="1s";
}