import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountRoutingModule } from './account-routing.module';
import { LoginAuthGuard } from 'src/app/core/authorization/auth.guard';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent],
  imports: [
    AccountRoutingModule
  ],
 
})
export class AccountModule { }
