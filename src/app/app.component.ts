import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'my-first-test-project';

  constructor(private router:Router) { }
  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });;
  }
}
