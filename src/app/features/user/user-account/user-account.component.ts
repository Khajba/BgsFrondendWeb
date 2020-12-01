import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { ChangeUserPassword, UserAddress, UserAttachment, UserDetails, UserPaymentDetails } from 'src/app/models/user-models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  balance: number;

  userPassword: ChangeUserPassword = {};
  userAddress: UserAddress = {}
  userPayment: UserPaymentDetails = {};

  attachment: UserAttachment = {};

  displayPasswordDialog: boolean = false;

  displayBalanceDialog: boolean = false;

  displayUploadDialog: boolean = false;

  userDetails: UserDetails = {};

  month: SelectItem[] = [];

  yearOptions: SelectItem[] = [];

  constructor(private readonly userService: UserService,
    private readonly messageService: MessageService) { }

  ngOnInit(): void {
    for (var item = 1; item <= 12; item++) {
      this.month.push({ value: item, label: item.toString() })
    }

    for (var item = 2020; item <= 2030; item++) {
      this.yearOptions.push({ value: item, label: item.toString() })
    }

    this.getUserDetails();
    this.getUserAddress();
    this.getUserPaymentDetails();
    this.getUserBalance();
  }

  changePassword() {
    if (this.userPassword.newPassword != this.userPassword.repeatNewPassword) {
      this.messageService.add({ severity: 'error', detail: 'Passwords do not match', summary: 'Error' })
    }
    this.changeUserPassword();
  }

  uploadClick() {
    this.displayUploadDialog = true;
  }

  uploadAttachemnts(event: any) {
    this.userService.uploadUserAvatar(event.files[0]).subscribe(
      response => {
        this.userDetails.avatarUrl = response.avatarUrl;
        this.displayUploadDialog = false;
      }
    )
  }

  removeClick() {
    this.removeAvatar();
  }

  balanceClick() {
    this.displayBalanceDialog = true;
  }

  addBalance() {
    this.addUserBalanace();
    this.displayBalanceDialog = false;
  }

  changePasswordClick() {
    this.displayPasswordDialog = true;
  }

  saveUserDetailsClick() {
    this.saveUserDetails();
  }

  saveUserAddressClick() {
    this.saveUserAddress();
  }

  saveUserPaymentDetailsClick() {
    this.saveUserPaymentDetails();
  }

  private removeAvatar() {
    this.userService.removeAvatar().subscribe(
      response => {
        this.userDetails.avatarUrl = 'https://image.flaticon.com/icons/png/512/21/21294.png';
      }
    )
  }



  private getUserPaymentDetails() {
    this.userService.getUserPaymentDetails().subscribe(
      response => {
        this.userPayment = response;
      }
    )
  }

  saveUserPaymentDetails() {
    this.userService.saveUserPaymentDetails(this.userPayment).subscribe(
      response => {
       
      }
    )
  }

  private getUserAddress() {
    this.userService.getUserAddress().subscribe(
      response => {
        this.userAddress = response;
      }
    )
  }

  saveUserAddress() {
    this.userService.saveUserAddress(this.userAddress).subscribe(
      response => {

      }
    )
  }

  private addUserBalanace() {
    this.userService.addUserBalance(this.balance).subscribe(
      response => {
        this.getUserBalance();
      }
    )
  }

  private getUserBalance() {
    this.userService.getUserBalance().subscribe(
      resposne => {
        this.userDetails.balance = resposne;
      }
    )
  }

  private changeUserPassword() {
    this.userService.changeUserPassword(this.userPassword).subscribe(
      response => {

      }
    )
  }

  private saveUserDetails() {
    this.userService.saveUserDetails(this.userDetails).subscribe(
      response => {

      }
    )
  }


  private getUserDetails() {
    this.userService.getUserDetails().subscribe(
      respnse => {
        this.userDetails = respnse;
        this.userDetails.avatarUrl = 'https://image.flaticon.com/icons/png/512/21/21294.png'
      }
    )
  }
}
