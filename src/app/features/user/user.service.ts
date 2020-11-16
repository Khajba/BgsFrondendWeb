import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/http/http.service';
import { ChangeUserPassword, UserAddress, UserDetails, UserPaymentDetails } from 'src/app/models/user-models';

const apiBaseUrl = "http://localhost:56902/api/User"
@Injectable()
export class UserService {

    constructor(private readonly httpService: HttpService) { }

    getUserDetails() {
        return this.httpService.get<UserDetails>(`${apiBaseUrl}/getDetails`)
    }

    saveUserDetails(userDetails: UserDetails) {
        return this.httpService.post<UserDetails>(`${apiBaseUrl}/saveUserDetails`, userDetails, true)
    }

    changeUserPassword(password: ChangeUserPassword) {
        return this.httpService.post<ChangeUserPassword>(`${apiBaseUrl}/changeUserPassword`, password, true)
    }

    addUserBalance(balance: number) {
        return this.httpService.post<number>(`${apiBaseUrl}/addUserBalance`, balance, true)
    }

    getUserAddress() {
        return this.httpService.get<UserAddress>(`${apiBaseUrl}/getUserAddress`)
    }

    saveUserAddress(userAddress: UserAddress) {
        return this.httpService.post<UserAddress>(`${apiBaseUrl}/saveUserAddress`, userAddress, true)
    }

    getUserPaymentDetails() {
        return this.httpService.get<UserPaymentDetails>(`${apiBaseUrl}/getPaymentDetails`)
            .pipe(map(
                response => {
                    const cardNumbers = response.cardNumber.match(/.{1,4}/g);

                    response.cardNumber1 = cardNumbers[0];
                    response.cardNumber2 = cardNumbers[1];
                    response.cardNumber3 = cardNumbers[2];
                    response.cardNumber4 = cardNumbers[3];

                    return response;
                }
            ))
    }

    saveUserPaymentDetails(userPayment: UserPaymentDetails) {
        const requestParams = {
            ...userPayment,
            cardNumber: userPayment.cardNumber1 + userPayment.cardNumber2 + userPayment.cardNumber3 + userPayment.cardNumber4
        }
        return this.httpService.post<UserPaymentDetails>(`${apiBaseUrl}/saveUserPaymentDetails`, requestParams, true)
    }

    getUserBalance() {
        return this.httpService.get<number>(`${apiBaseUrl}/getUserBalance`)
    }
}

