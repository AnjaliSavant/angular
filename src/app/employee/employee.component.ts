import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[]=[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.onGet()
    .subscribe(res=>{
      this.employeeList=res.body;
     },error=>{
     });
  }
}
