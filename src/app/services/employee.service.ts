import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string="https://localhost:44375/api/";
  find(id: number) {
    throw new Error('Method not implemented.');
  }
  employeeList = [  
   
   {
     id:1,
     empname:'Sandip Davari',
     email:'sandip.davari@ecotechservices.com',
     address:'Kolhapur',
     salary: 60000
   
     },
    {
      id:2,
      empname:'Anjali Savant',
      email:'anjali.savant@ecotechservices.com',
      address:'Latur',
      salary: 30000
    
     },
     {
      id:3,
      empname:'Awanti Patil',
      email:'awanti.patil@ecotechservices.com',
      address:'Sangali',
      salary: 60000
    
     },
     {
      id:4,
      empname:'Sachin Tehare',
      email:'sachin.tehare@ecotechservices.com',
      address:'Pune',
      salary: 90000
    
     },
     {
      id:5,
      empname:'Shrikant Ambekar',
      email:'shrikant.ambekar@ecotechservices.com',
      address:'Karad',
      salary: 80000
     }
    ];
  employee:Employee=
  {
  ID:0,
  Name:"",
  Email:"",
  Address:"",
  Salary:0
  }
  
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    let userToken=localStorage.getItem('token');
    console.log("UserToken :-"+userToken);
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + userToken);
  }
  onGet():Observable<any>
  {
    let actionUrl=this.url+"Employee";
    //return this.employeeList;
    debugger;
    return this.http.get(actionUrl, {headers: this.headers,observe: 'response' });
    
  }
  onAdd(employee:Employee):Observable<any>
  {
    // this.employeeList.push(employee)
    debugger;
    let actionUrl=this.url+"Employee";
    return this.http.post(actionUrl,employee,{headers: this.headers, observe: 'response' });
  }
  GetbyID(id:number):Observable<any>
  {
    //var empres=this.employeeList.filter(x=>x.id==id);
    // this.employee=empres[0];
    // return this.employee;
    let actionUrl=this.url+"Employee/" +id;
    return this.http.get(actionUrl, {headers: this.headers, observe: 'response' });

  }
  onUpdate(employee:Employee):Observable<any>{
    // var oldE=this.employeeList.filter(x=>x.id==employee.ID);
    // // //employee=oldE[0];
    // oldE[0].empname=employee.Name;
    // oldE[0].email=employee.Email;
    // oldE[0].address=employee.Address;
    // oldE[0].salary=employee.Salary;
    // var index=this.employeeList.indexOf(employee);
    // this.employeeList[index]=oldE[0];
    let actionUrl=this.url+"Employee/"+employee.ID;
    return this.http.put(actionUrl,employee,{headers: this.headers, observe: 'response' });

  }
  onDelete(id:number):Observable<any>{
    // var index=this.employeeList.findIndex(x=>x.id===id);
    // this.employeeList.splice(index,1);
    let actionUrl=this.url+"Employee/" +id;
      return this.http.delete(actionUrl,{headers: this.headers, observe: 'response' });
  }
  onView(employee:Employee):Observable<any>{
    // var oldE=this.employeeList.filter(x=>x.id==employee.ID);
    // //employee=oldE[0];
    // oldE[0].empname=employee.Name;
    // oldE[0].email=employee.Email;
    // oldE[0].address=employee.Address;
    // oldE[0].salary=employee.Salary;
    // var index=this.employeeList.indexOf(employee);
    // this.employeeList[index]=oldE[0];
    let actionUrl=this.url+"Employee/"+employee.ID;
    return this.http.patch(actionUrl,{headers: this.headers, observe: 'response' });
  }
}

