document.getElementById('btn-login').addEventListener('click', function(event){

event.preventDefault();
    // console.log("login button clicked");

const phoneNum=document.getElementById('phone-num').value;
const pinNum=document.getElementById('input-pin').value;
console.log(phoneNum, pinNum);
if(phoneNum==='0' && pinNum==='1234'){
    console.log("You're Logged in");
    window.location.href= './home.html';
}
else{
    alert ('Invalid Data');
}

})