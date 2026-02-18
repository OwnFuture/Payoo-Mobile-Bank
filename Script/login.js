console.log('Login option created');

document.getElementById('login-btn').addEventListener('click',function(){
    //get the contact number
    const inputMobile = document.getElementById('input-mobile');
    const mobileNumber = inputMobile.value;
    console.log(mobileNumber);

    //get the pin number
    const inputPin = document.getElementById('input-pin');
    const pinNumber = inputPin.value;
    console.log(pinNumber);

    //match contact number and pin
    if(mobileNumber==='01581642874' && pinNumber==='9767'){
        window.location.assign('/home.html');
    }else{
        alert('Login Failed');
        return;
    }
})