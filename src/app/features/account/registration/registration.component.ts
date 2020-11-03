import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RegisterUserModel } from 'src/app/models/authenticate-user.model';
import { User } from 'src/app/models/user';
import { AccountService } from '../accunt.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = {};

  constructor(
    private readonly accountService: AccountService,
    private readonly messageService: MessageService) { }

  ngOnInit(): void {
  }

  registerClick() {
    if (this.user.password != this.user.repeatPassword) {
      this.messageService.add({ severity: 'error', detail: 'Passwords do not match', summary: 'Error' })
      return;
    }

    this.registerUser();
  }

  registerUser() {
    this.accountService.registerUser(this.user).subscribe(
      response => {
        

      }
    )
  }



}
