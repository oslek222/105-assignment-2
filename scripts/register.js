console.log("users register");

function User(email,pass,first,last,age,
address,phone,payment){
    this.email = email;
    this.password = pass;
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.address = address;
    this.payment = payment;
    


}
function selPaymentValidate(){
    if(payment)
}

function registerUser(){
   let email = $("#txtEmail").val();
   let password = $("#txtpassword").val();
   let first=$("#txtFirst").val();
   let last=$("#txtlast").val();
   let age=$("#txtage").val();
   let address=$("#txtaddress").val();
   let phone=$("#txtphone").val();
   let payment=$("input:selPaymnet[name=selPaymnet]").val();
   console.log
    let user = new User(email,password,first,last,
        age,address,phone,payment)
        console.log(user);
        saveUser(user);// function found on store manager.js
}

function init(){
    console.log("init function");
  $("#btnSave").click(registerUser);
}

window.onload=init;