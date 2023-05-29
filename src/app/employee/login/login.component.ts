import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/login/login-user';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:string="";
  token_type:string="";
  loginUser: LoginUser= {
    Username: "",
    Password: ""
  }

  constructor(private loginservice:LoginService,private _router: Router) {
  }
  login(login: NgForm) {
    let loginuser:LoginUser={
      Username: login.value.Username,
      Password:  login.value.Password
    }

    this.loginservice.login(loginuser).subscribe(res=>{     
      let tokendetails=res.body;
      this.token=tokendetails.access_token;
      this.token_type=tokendetails.token_type;
      this.setLocalStorage();
      this._router.navigateByUrl('/employee');
      console.log(tokendetails.access_token);
    });
  }
  ngOnInit(): void {
    //get formControls() { return this.authForm.controls; }
  }
  setLocalStorage()
	{
		localStorage.setItem('token', this.token);
		localStorage.setItem('token_type',this.token_type);
  }

  // logout(){
  //   localStorage.clear();
  //   this._router.navigate(["/login"]).then(() => {
  //     window.location.reload();
  //   });;
  // }
}