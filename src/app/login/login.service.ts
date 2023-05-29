import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { LoginUser } from './login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //baseUrl='http://localhost:4000/';
  //email:string='test@getMaxListeners.com';
  //password:string='password';
  url:string="https://localhost:44343/api/"; 
  tokenUrl:string="https://localhost:44375/token";
  private _router: any;

  constructor(private http: HttpClient) { }
  // login(Username:string,Password:string):Observable<string>
  // {
  //   console.log("I am server");
  //   //return this.logins.post('${baseUrl}user/login',data);
  //   //return "Sucess";
  // }
  login(logincred: LoginUser): Observable<any> {
		var str = "grant_type=password&username=" + logincred.Username + "&password=" + logincred.Password;	
    return this.http.post(this.tokenUrl, str,{ observe: 'response' });
  }
}
