import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './employee/create/create.component';
import { EditComponent } from './employee/edit/edit.component';
import { ViewComponent } from './employee/view/view.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { LoginComponent } from './employee/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    DeleteComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
