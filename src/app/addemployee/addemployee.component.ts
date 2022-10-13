import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }


  employeecode=""
  employee=""
  designation=""
  gender=""
  company_name=""
  salary=""
  address=""
  number=""
  email=""
  experiance=""
  blood=""
  dob=""


  readvalues=()=>{
    let data={

      "employeecode":this.employeecode,
      "employee":this.employee,
      "designation":this.designation,
      "gender":this.gender,
      "company_name":this.company_name,
      "salary":this.salary,
      "address":this.address,
      "number":this.number,
      "email":this.email,
      "experiance":this.experiance,
      "blood":this.blood,
      "dob":this.dob,
    }
    console.log(data)

  
}

  ngOnInit(): void {
  }

}
