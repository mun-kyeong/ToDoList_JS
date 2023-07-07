const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";      //상수일 경우 대문자로 작성
const USERNAME_KEY = "username";


function LoginFormSubmit(event){
    event.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, LoginInput.value);
    paintGreeting();  
    
}

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = "Hello "+ username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit",LoginFormSubmit);
    //show the form`
} else {
    paintGreeting();
    //show the greeting
}