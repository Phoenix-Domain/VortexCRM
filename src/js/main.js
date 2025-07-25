import '../css/style.css'

let userId = 0;
class MakeUser {
  constructor(name,email,phone,service,source,status,date,time){
    this.id = userId++;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.service = service;
    this.source = source;
    this.status = status;
    this. date = date;
    this.time = time;
  }
}

const formInputs = document.querySelectorAll('input'); //All input elements in the DOM
const userStatus = document.querySelector('#status');
const submitBtn = document.querySelector('#submitBtn');
const dashBoard = document.querySelector('#dashBoard');


submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const name = formInputs[0].value.trim();
  const email = formInputs[1].value.trim();
  const phone = formInputs[2].value.trim();
  const service = formInputs[3].value.trim();
  const source = formInputs[4].value.trim();
  const date = formInputs[5].value.trim();
  const time = formInputs[6].value.trim();
  const status = userStatus.value.trim();

  let user = new MakeUser(name,email,phone,service,source,status,date,time);

  
  
})


//5. I create 7 new td elements
//6. I pass the appropriate values as it's textContent
//7. I create a new tr element
//8. I append all the td elements into the tr element
//9. I append the tr element in the dashBoard as a new row
//10. I clear the input
