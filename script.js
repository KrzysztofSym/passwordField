const eye_lash = document.querySelector(".fa-eye-slash");
const eye = document.querySelector(".fa-eye");
const input = document.getElementById('pass');

eye.addEventListener('click', ()=> {
    eye.classList.remove("active");
    eye_lash.classList.add('active');
    input.type = input.type === "password" ? "text" : "password";
});

eye_lash.addEventListener('click', ()=> {
    eye_lash.classList.remove("active");
    eye.classList.add('active');
    input.type = input.type === "password" ? "text" : "password";
})