import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateComponent } from './employee/create/create.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { EditComponent } from './employee/edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './employee/login/login.component';
import { ViewComponent } from './employee/view/view.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent,canActivate: [AuthGuard] },
  { path: 'employee/:id/view', component: ViewComponent,canActivate: [AuthGuard] },
  { path: 'employee/create', component: CreateComponent,canActivate: [AuthGuard] },
  { path: 'employee/:id/edit', component: EditComponent,canActivate: [AuthGuard] },
  { path: 'employee/:id/delete', component: DeleteComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '',component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { 
 }
