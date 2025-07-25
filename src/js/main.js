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