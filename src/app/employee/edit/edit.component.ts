import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:number=0;
employee:Employee=
{
ID:0,
Name:"",
Email:"",
Address:"",
Salary:0
}
  form!: FormGroup;
  constructor(private router:Router, private routes:ActivatedRoute,private employeeServices:EmployeeService) { 
  }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.employeeServices.GetbyID(this.id)
    .subscribe(res=>{
      this.employee=res.body;
     },error=>{
 
     });
  }

  onSubmit(form:NgForm){
    let employee:Employee={
    ID:form.value.ID,
    Name:form.value.Name,
    Email:form.value.Email,
    Address:form.value.Address,
    Salary:form.value.Salary,
    }
    
    this.employeeServices.onUpdate(employee).subscribe(res=>{
    this.router.navigateByUrl('/employee');
     },error=>{
     });
    
 }
}
