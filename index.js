let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password =  document.querySelector('#password');
let btn = document.querySelector('#btn')
let form = document.querySelector('form')
let thanks = document.querySelector('div')

let nameSpan = document.querySelector('#namespan');
let emailSpan = document.querySelector('#emailspan');
let passwordSpan = document.querySelector('#passwordspan');
let isValid = true;
form.addEventListener('submit', function(event){

  if(name.value.trim() === ''){
  nameSpan.innerHTML = "Please enter name."
  name.style.marginBottom = '6px';
  isValid = false;
  }else{
   nameSpan.innerHTML = ""; 
   name.style.marginBottom = '30px';
   nameSpan.style.display = 'none'
   

  }
  
  if(email.value.trim() === ''){
    emailSpan.innerHTML = "Please enter correct email."
    email.style.marginBottom = '6px';
    isValid = false;
  }else{
    emailSpan.innerHTML = ""; 
    email.style.marginBottom = '30px';
    emailSpan.style.display = 'none'
   }

  if(password.value.trim() === ''){
    passwordSpan.innerHTML = "Please enter correct password."
     password.style.marginBottom = '6px';
     isValid = false;
  }else if(password.value.length > 0 && password.value.length <= 8){
    passwordSpan.innerHTML = "Please enter greater than 8 digits."
    password.style.marginBottom = '6px';
    
    isValid = false;
  }else{
    passwordSpan.innerHTML = ""; 
    password.style.marginBottom = '30px';
    passwordSpan.style.display = 'none'

   }


   if(!isValid){
    event.preventDefault();
   }


   

});


if(isValid){
    form.style.display = 'none';
   thanks.style.display = 'block'
}

thanks.addEventListener('click' , function () {
    thanks.style.display = 'none'
    form.style.display = 'block';
})












/*let nameof = "Samar Ali";
let number = [1,2,3,4,5];
let age = 23;
let found = true;
let obj = {
    name : "samar ali",
    age : 13,
    class : "BS Computer Science",
    department : "Computer Science",
    id : "BSF24004525",
}


document.writeln("Name is : " + obj.name + "<br>");
document.writeln("Age is : " + obj.age + "<br>");
document.writeln("Class is : " + obj.class + "<br>")
document.writeln("Id is : " + obj.id + "<br>");
document.writeln("Department is : "  + obj.department)

// console.log(name);
// console.log(age);
// document.writeln("Name is : " + name + "<br>")
// // document.writeln("Age is : " +  age);
// if(found == true){
//     document.writeln("Samar");
// }
// else{
//     document.writeln("Name not founded.");
// }
// n = nameof.length()
// for (let i = 0; i < n; i++) {
    
//     document.writeln(obj + "<br>"); 
    
// }


*/