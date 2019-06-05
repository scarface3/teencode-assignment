const one = document.getElementById("one");
const userName = document.getElementById("usernamesignup");
const password = document.getElementById("passwordsignup");
const submit = document.getElementById("submit");
const profile = {
    name : "dimzy",
    pass : "scarface"
};

//DECLARATION
const message = document.createElement("div"); 
one.appendChild(message);


message.style.textAlign = "center";
message.style.color = "white";
message.style.padding = "20px";


function signIn(){

    
    if(userName.value === profile.name && password.value === profile.pass){
        message.textContent = "LOG-IN SUCCESSFUL!";
        message.style.backgroundColor = "green";    
    }
    else if(userName.value !== profile.name || password.value !== profile.pass){
        message.textContent = "THE USERNAME OR PASSWORD IS INCORRECT";
        message.style.backgroundColor = "red";
    }

    userName.value = "";
    password.value = "";
}

submit.addEventListener("click", signIn);