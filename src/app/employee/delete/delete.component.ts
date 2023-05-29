import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'selenium-webdriver';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: number = 0;
  employee: Employee =
    {
      ID: 0,
      Name: "",
      Email: "",
      Address: "",
      Salary: 0
    }
  //@Output() deleteRequest=new EventEmitter<>();

  //@Output notifyDelete:EventEmitter<number>=new EventEmitter<number>();

  constructor(private router: Router, private employeeServices: EmployeeService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.routes.snapshot.params['id'];
    // this.employee = this.employeeServices.GetbyID(this.id);
    this.id = this.routes.snapshot.params['id'];
    this.employeeServices.GetbyID(this.id)
    .subscribe(res=>{
      this.employee=res.body;
     },error=>{
 
     });
  }
  onSubmit(form: NgForm) {
    let employee: Employee = {
      ID: form.value.ID,
      Name:form.value.Name,
      Email: form.value.Email,
      Address: form.value.Address,
      Salary: form.value.Salary,
    }
    this.employeeServices.onDelete(this.employee.ID).subscribe(res=>{
      this.router.navigateByUrl('/employee');
     },error=>{
     });
    
   }
}

