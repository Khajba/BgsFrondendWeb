import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountService } from './accunt.service';




@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent],
  imports: [
    AccountRoutingModule,
    SharedModule
  ],
  providers: [
    AccountService
  ]

})
export class AccountModule { }
