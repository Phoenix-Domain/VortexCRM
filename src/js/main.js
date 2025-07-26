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
const leadsList = document.querySelector('#leadsList');

let userArray = getItem() || [];

if(userArray.length > 0){
  userArray.forEach(item => createList(item))
}


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

  createList(user);

  userArray.push(user);

  saveItem(userArray);
  
  clearInputs();
});


function createList(user){
  const name = document.createElement('p');
  const email = document.createElement('p');
  const phone = document.createElement('p');
  const service = document.createElement('p');
  const source = document.createElement('p');
  const status = document.createElement('p');
  const date = document.createElement('p');
  const time = document.createElement('p');

  
  const userList = document.createElement('li');


  name.textContent = user.name;
  email.textContent = user.email;
  phone.textContent = user.phone;
  service.textContent = user.service;
  source.textContent = user.source;
  status.textContent = user.status;
  date.textContent = user.date;
  time.textContent = user.time;

  userList.append(name,email,phone,service,source,status,date,time);

  leadsList.append(userList)
  

}

function clearInputs(){
  formInputs.forEach(input => {input.value = '';});
  userStatus.value = 'select';
}


function saveItem(item){
  localStorage.setItem('Client', JSON.stringify(item));
}

function getItem(){
  return JSON.parse(localStorage.getItem('Client'));
}