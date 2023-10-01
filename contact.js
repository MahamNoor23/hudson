// Name validation 
document.getElementById('name').addEventListener('keyup',()=>{
    let regName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/;
    let name = document.getElementById('name').value;
    
    if(!regName.test(name)){      
        document.getElementById('nametxt').innerHTML = "Please enter your full name"
    }else{
        document.getElementById('nametxt').innerHTML = ""
        
    }
})

// Email validation 

document.getElementById('email').addEventListener('keyup',()=>{
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let email = document.getElementById('email').value
    
    if(!(regEmail.test(email))){
        document.getElementById('emailError').innerHTML = `Email address is invalid`;       
    }else{
        document.getElementById('emailError').innerHTML = ``;
    }
})

// Phone validation 

document.getElementById('phone').addEventListener('keyup',()=>{
    let regPhone = /^((03)|(\+923))[0-9]{9}$/
    let phone = document.getElementById('phone').value
    
    if(!(regPhone.test(phone))){
        document.getElementById('phoneError').innerHTML = `Number must start with +92 or 03`;       
    }else{
        document.getElementById('phoneError').innerHTML = ``;
    }
})
