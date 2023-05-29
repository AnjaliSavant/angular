import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:number=0;
  employee:Employee=
  {
  ID:0,
  Name:"",
  Email:"",
  Address:"",
  Salary:0
  }

  constructor(public employeeServices:EmployeeService,private routes: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];      
    // this.employee=this.employeeServices.GetbyID(this.id)

    this.id=this.routes.snapshot.params['id'];
    this.employeeServices.GetbyID(this.id).subscribe(res=>{
      this.employee=res.body;
     },error=>{
 
     });

     this.employeeServices.onView(this.employee).subscribe(res=>{
      this.router.navigateByUrl('/employee');
       },error=>{
       });
    }
    // this.employeeServices.onDelete(this.employee.ID).subscribe(res=>{
    //   this.router.navigateByUrl('/employee');
    //  },error=>{
    //  });
  }
  


