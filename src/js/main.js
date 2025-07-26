import '../css/style.css'


class MakeUser {
  constructor(name,email,phone,service,source,status,date,time, id=crypto.randomUUID()){
    this.id = id;
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

const formInputs = document.querySelectorAll('.formInput'); //All input elements in the DOM
const formUpdateInputs = document.querySelectorAll('.formUpdateInput');
const updateBtn = document.querySelector('#updateBtn');
const submitBtn = document.querySelector('#submitBtn');
const leadsList = document.querySelector('#leadsList');
const updateForm = document.querySelector('#updateForm');

let currentUserId = null; //To be used when updating the dshboard


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
  const status = formInputs[5].value.trim();
  const date = formInputs[6].value.trim();
  const time = formInputs[7].value.trim();
  

  let user = new MakeUser(name,email,phone,service,source,status,date,time);

  createList(user);

  userArray.push(user);

  saveItem(userArray);
  
  clearInputs();
});

updateBtn.addEventListener('click', e => {
  e.preventDefault();

  const name = formUpdateInputs[0].value.trim();
  const email = formUpdateInputs[1].value.trim();
  const phone = formUpdateInputs[2].value.trim();
  const service = formUpdateInputs[3].value.trim();
  const source = formUpdateInputs[4].value.trim();
  const status = formUpdateInputs[5].value.trim();
  const date = formUpdateInputs[6].value.trim();
  const time = formUpdateInputs[7].value.trim();

  let updatedUser = new MakeUser(name,email,phone,service,source,status,date,time,currentUserId);

  updateList(updatedUser);

  updateForm.classList.add('hidden');
  
})


function createList(user){
  const name = document.createElement('p');
  const email = document.createElement('p');
  const phone = document.createElement('p');
  const service = document.createElement('p');
  const source = document.createElement('p');
  const status = document.createElement('p');
  const date = document.createElement('p');
  const time = document.createElement('p');
  const delBtn = document.createElement('button');
  const editBtn = document.createElement('button');

  
  const userList = document.createElement('li');


  name.textContent = user.name;
  email.textContent = user.email;
  phone.textContent = user.phone;
  service.textContent = user.service;
  source.textContent = user.source;
  status.textContent = user.status;
  date.textContent = user.date;
  time.textContent = user.time;

  delBtn.textContent = 'Delete';
  editBtn.textContent = 'Edit';

  delBtn.classList.add('btnPrimary');
  editBtn.classList.add('btnPrimary', 'btnSecondary');


  delBtn.addEventListener('click', e => {
    e.preventDefault();
    deleteItem(userList);
    userArray = userArray.filter(item => item.id !== user.id)
    saveItem(userArray);
  });

  editBtn.addEventListener('click', e => {
    e.preventDefault();

    currentUserId = user.id;

    formUpdateInputs[0].value = user.name;
    formUpdateInputs[1].value = user.email;
    formUpdateInputs[2].value = user.phone;
    formUpdateInputs[3].value = user.service;
    formUpdateInputs[4].value = user.source;
    formUpdateInputs[5].value = user.status;
    formUpdateInputs[6].value = user.date;
    formUpdateInputs[7].value = user.time;

    updateForm.classList.remove('hidden');
    
  })

  userList.append(name,email,phone,service,source,status,date,time,delBtn,editBtn);

  leadsList.append(userList)
  

}

function updateList(user){
  userArray = userArray.map(item => {
    return item.id === user.id ? user : item;
  });

  saveItem(userArray);

  leadsList.innerHTML = '';
  userArray.forEach(item => createList(item))
}

function clearInputs(){
  formInputs.forEach(input => {input.value = '';});
}


function saveItem(item){
  localStorage.setItem('Client', JSON.stringify(item));
}

function getItem(){
  return JSON.parse(localStorage.getItem('Client'));
}

function deleteItem(item){
  item.remove();
}