import '../css/style.css'

let userId = 0;
class MakeUser {
  constructor(name,email,phone,service,source,date,time){
    this.id = userId++;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.service = service;
    this.source = source
    this. date = date;
    this.time = time;
  }
}

const formInputs = document.querySelectorAll('input'); //All input elements in the DOM
const userStatus = document.querySelector('#status');
const submitBtn = document.querySelector('#submitBtn');
const dashBoard = document.querySelector('#dashBoard');

//1. User types in value
//2. I collect the value
//3. I create a new user object
//4. I pass the input values as parameters in the user object
//5. I create 7 new td elements
//6. I pass the appropriate values as it's textContent
//7. I create a new tr element
//8. I append all the td elements into the tr element
//9. I append the tr element in the dashBoard as a new row
//10. I clear the input
