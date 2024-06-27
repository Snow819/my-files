function checkPasswor(){
    var pass1 = document.querySelector(".pass1");
    var message = document.querySelector(".message");

    if (pass1.value === "") {
        message.innerHTML = "password cannot be empty";
        return false;   
    } else {
        message.innerHTML = "";
        return true;  
    }
}
function checkPasswor(){
    var pass2 = document.querySelector(".pass2");
    var message = document.querySelector(".message");

    if (pass2.value === "") {
        message.innerHTML = "password cannot be empty";
        return false;   
    } else {
         message.innerHTML = "";
         return true;  
    }
}    
function checkPasswor(){
    var pass3 = document.querySelector(".pass3");
    var message = document.querySelector(".message");

    if (pass3.value === "") {
    message.innerHTML = "password cannot be empty";
    return false;   
    } else {
    message.innerHTML = "";
    return true;  
    }
}
function checkPassword(){
    var pass4 = document.querySelector(".pass4").value;
    var message = document.querySelector(".message");

    if (pass4 === "") {
        message.innerHTML = "password cannot be empty";
        return false;   
    } else {
            message.innerHTML = "";
            return true;  
        }
    }        
function checkPassword(){
    var pass5 = document.querySelector(".pass5").value;
    var message = document.querySelector(".message");
    
    if (pass5 === "") {
        message.innerHTML = "password cannot be empty";
        return false;   
    } else {
        message.innerHTML = "";
        return true;  
        }
    }        
function checkPassword(){
    var pass6 = document.querySelector(".pass6").value;
    var message = document.querySelector(".message");
        
    if (pass6 === "") {
        message.innerHTML = "password cannot be empty";
        return false;   
    } else {
        message.innerHTML = "";
        return true;  
        }
}        