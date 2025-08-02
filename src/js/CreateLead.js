class CreateLead {
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

export default CreateLead;