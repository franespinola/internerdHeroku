/*import validator from 'validator';

const name= document.getElementsByName("nombre")[0]
name.addEventListener("keyup",()=>
{
    if(/[^A-Za-z]+/g.test(name.value))
    {
        name.value=user.value.replace(/[^A-Za-z]+/g, '');
    }
})*/

/*const { not } = require("sequelize/types/lib/operators");*/

/*const userName= document.getElementsByName("nombre")[0];
const button=document.getElementsByClassName("btn")[0];
const input=document.getElementsByClassName("campo")[0];
const campo=document.getElementsByClassName("campo");
const msg=document.createElement("p");

for(let indice=0;indice<campo.length;indice++)
{
    campo[indice].addEventListener("keyup",()=>
    {
        if(/[^A-Za-z]+/g.test(campo[indice].getElementsByTagName("input")[0].value))
        {
            button.disabled=true;
            button.style.backgroundColor="grey";
        }
        else
        {
            button.disabled=false;
            button.style.backgroundColor="#d00000";
        }
    })
}*/


const signupForm = document.getElementById("signup");
signupForm.addEventListener("submit", function(event){
event.preventDefault();
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("email");
let errors = false;
if (password.value != confirmPassword.value) {
    document.getElementById("errorPassword").innerHTML="Las contraseñas deben coincidir !!!"; 
    
    errors = true;  
}else{
    document.getElementById("errorPassword").innerHTML=""; 
}
if(/[^A-Za-z]+/g.test(name.value)){
    document.getElementById("errorName").innerHTML="El nombre no debe contener carácteres numéricos!!!"; 
    errors = true;
}else{
    document.getElementById("errorName").innerHTML=""; 
}
if(/[^A-Za-z]+/g.test(lastName.value)){
    document.getElementById("errorLastName").innerHTML="El apellido no debe contener carácteres numéricos!!!"; 
    errors = true;
}else{
    document.getElementById("errorLastName").innerHTML=""; 
}

if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)){
    document.getElementById("errorEmail").innerHTML=""; 
    errors = true;
}else{
    
    document.getElementById("errorEmail").innerHTML="Por favor ingrese un email válido.";
}

if( errors ) {
   return; 
}

});




/*userName.addEventListener("keyup",()=>
{
    if(/[^A-Za-z]+/g.test(userName.value))
    {
        button.disabled=true;
        userName.style.transition=".2s ease-in";
        userName.style.border="5px solid red";
        msg.setAttribute("style","font-size: 14px; color:red; margin-top:2px; margin-bottom: 2px;")
        msg.innerText="El nombre no debe conteneer simbolos y/o numeros";
        input.append(msg);
    }
    else
    {
        button.disabled=false;
        userName.style.border="1px solid black";
        msg.remove();
    }
})*/