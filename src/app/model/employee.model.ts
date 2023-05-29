export class Employee {
     ID: number;
     Name:string;
     Email:string;
     Address:string;
     Salary:number;    

    constructor (id: number,empname:string,email:string,address:string,salary:number)
    {
        this.ID=id ;
        this.Name=empname;
        this.Email=email;
        this.Address=address;
        this.Salary=salary; 
    }
}
