

/*VALIDACIÓN FORMULARIO REGISTRO*/
const urlPosition = document.URL.split("/").slice(-1)[0];

switch(urlPosition)
{
    case "login":
        const loginForm = document.getElementById("login");
        loginForm.addEventListener("submit", function(event){
            event.preventDefault();
            const email = document.getElementById("email");
            const pass = document.getElementById("pass");
            if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)){
                document.getElementById("email").innerHTML=""; 
            }else{
                
                document.getElementById("errorCorreo").innerHTML="Por favor ingrese un email válido.";
            }
            if(!pass.value){
                document.getElementById("errorPass").innerHTML="ingrese contraseña"; 
            }

        })
        break;
    case "signup":
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
        break;
}


/*VALIDACIÓN FORMULARIO LOGIN : SIN TERMINAR - NO FUNCIONA 14/09*/