import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router)//, private clientAuthentication: ClientAuthenticationService) 
  {      
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    let token=  localStorage.getItem('token');
      if (token != "" && token != null)
       
      {      
        return true;  
      }
      
      this._router.navigate(['login'], { queryParams: { returnUrl: state.url } }); 
      return false;    
    } 
}
