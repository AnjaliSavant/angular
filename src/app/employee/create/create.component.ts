import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  employee:Employee=
  {
    ID: 0,
    Name: "",
    Email: "",
    Address: "",
    Salary: 0
  }
  employeeList: any;
  constructor(private router:Router, private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employee=
      {
        ID: 0,
      Name: "",
      Email: "",
      Address: "",
      Salary: 0
      }

    this.employeeService.onGet()
    .subscribe(res=>{
      this.employeeList=res.body;
     },error=>{
 
     });
    
  }

  onSubmit(form:NgForm){
    debugger;
    let employee:Employee={
    ID:form.value.ID,
    Name:form.value.Name,
    Email:form.value.Email,
    Address:form.value.Address,
    Salary:form.value.Salary,
    }
    this.employeeService.onAdd(employee).subscribe(res=>{
      this.router.navigateByUrl('/employee');
     },error=>{
       console.log(error.message);
     });;
     //this.router.navigateByUrl('/employee');
}
}
