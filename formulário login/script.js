var email = document.getElementById('email');

email.addEventListener('focus',()=>{
    email.style.borderColor = "rgb(194, 47, 243)";
});

email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
});