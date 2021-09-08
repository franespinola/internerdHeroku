/*import validator from 'validator';

const name= document.getElementsByName("nombre")[0]
name.addEventListener("keyup",()=>
{
    if(/[^A-Za-z]+/g.test(name.value))
    {
        name.value=user.value.replace(/[^A-Za-z]+/g, '');
    }
})*/

const userName= document.getElementsByName("nombre")[0];
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
}

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