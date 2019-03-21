export default class Employee {
  constructor(id, name, phone, title) { 
    this.id = id
    this.name = name
    this.phone = phone
    this.title = title
  }
  
  updateName(val) { 
    this.name = val
  }

  updatePhone(val) { 
    this.phone = val
  }

  updateTitle(val) { 
    this.title = val
  }
}