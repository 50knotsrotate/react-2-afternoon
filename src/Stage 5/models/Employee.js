export default class Employee {
  constructor(id, name, phone, title) { 
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title
  }
  
  updateName(val) { 
    this.name = val
  }

  updatePhone(number) { 
    this.phone = number
  }

  updateTitle(title) { 
    this.title = title
  }
}