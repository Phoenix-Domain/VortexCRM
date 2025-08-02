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
const leadForm = document.querySelector('#leadForm');
const exportBtn = document.querySelector('#exportBtn');

let currentUserId = null; //To be used when updating the dshboard


let userArray = getItem() || [];

if(userArray.length <= 0){
  let user = new MakeUser('Batubo Victory','victorybatubo76@gmail.com','08012345678','Web Development','Google','Pending','2023-10-01','10:00');

  createList(user);

}else if(userArray.length > 0){
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
  

  if(name === '' || email === '' || phone === '' || service === '' || source === '' || status === 'select' || date === '' || time === ''){
    alert('Please fill in all fields');
    return;
  } else{
    let user = new MakeUser(name,email,phone,service,source,status,date,time);

  createList(user);

  userArray.push(user); 
  saveItem(userArray);

  userArray.push(user);

  saveItem(userArray);
  
  clearInputs();
  }
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
    
  leadForm.classList.remove('blur-sm');
  leadsList.classList.remove('blur-sm');
});

exportBtn.addEventListener('click', e => {
  e.preventDefault();

  if(userArray.length === 0) {
    alert('No leads to export!');
    return;
  }
  
  exportDataToCSV(userArray);
});


function exportDataToCSV(data) {
  const headers = ['Name', 'Email', 'Phone', 'Service', 'Source', 'Status', 'Date', 'Time'];
  const csvRows = [headers.join(',')];

  data.forEach(user => {
    const row = [
      `"${user.name.replace(/"/g, '""')}"`,    
      `"${user.email.replace(/"/g, '""')}"`,
      `"${user.phone.replace(/"/g, '""')}"`,
      `"${user.service.replace(/"/g, '""')}"`,
      `"${user.source.replace(/"/g, '""')}"`,
      `"${user.status.replace(/"/g, '""')}"`,
      `"${user.date.replace(/"/g, '""')}"`,
      `"${user.time.replace(/"/g, '""')}"`
    ].join(',');
    csvRows.push(row);
  });

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;

  const today = new Date().toISOString().split('T')[0];


  link.download = `leads_${today}.csv`;
  link.click();

  URL.revokeObjectURL(url);
  link.remove();
  alert('CSV file has been downloaded successfully!');
}


function createList(user){
  let HTML_Elements = {
    paragraph: 'p',
    span: 'span'
  }

  const { paragraph, span } = HTML_Elements

  // Create elements for each user detail
  const name = document.createElement(paragraph);
  const email = document.createElement(paragraph);
  const phone = document.createElement(paragraph);
  const service = document.createElement(paragraph);
  const source = document.createElement(paragraph);
  const status = document.createElement(paragraph);
  const date = document.createElement(paragraph);
  const time = document.createElement(paragraph);
  const btnDiv = document.createElement('article');
  const delBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  //TODO: Use object destructuring to simplify the code

  // Create spans for each user detail
  const nameSpan = document.createElement(span);
  const emailSpan = document.createElement(span);
  const phoneSpan = document.createElement(span);
  const sourceSpan = document.createElement(span);
  const serviceSpan = document.createElement(span);
  const dateSpan = document.createElement(span);
  const timeSpan = document.createElement(span);
  const statusSpan = document.createElement(span);

  nameSpan.textContent = 'Name:';
  emailSpan.textContent = 'Email:';  
  phoneSpan.textContent = 'Phone:';
  sourceSpan.textContent = 'Source:';
  serviceSpan.textContent = 'Service:';
  dateSpan.textContent = 'Date:';
  timeSpan.textContent = 'Time:';
  statusSpan.textContent = 'Status:';

  
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

    if(!updateForm.classList.contains('hidden')){
      leadForm.classList.add('blur-sm');
      leadsList.classList.add('blur-sm');
    }else{
      leadForm.classList.remove('blur-sm');
      leadsList.classList.remove('blur-sm');
    }
    
  });

  if(user.status === 'Pending'){
    status.classList.add('text-yellow-500');
  } else if(user.status === 'Completed'){
    status.classList.add('text-green-500');
  } else if(user.status === 'Cancelled'){
    status.classList.add('text-red-500');
  };

  btnDiv.classList.add('btnDiv');

  btnDiv.append(delBtn,editBtn);

  userList.append(nameSpan,name,emailSpan,email,phoneSpan,phone,serviceSpan,service,sourceSpan,source,statusSpan,status,dateSpan,date,timeSpan,time,btnDiv);

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