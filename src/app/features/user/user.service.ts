import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/http/http.service';
import { ChangeUserPassword, UserAddress, UserAttachment, UserDetails, UserPaymentDetails, UserWishlist } from 'src/app/models/user-models';

const apiBaseUrlUser = "http://localhost:56902/api/User";
const apiBaseUrlWishlist = "http://localhost:56902/api/wishlist";
@Injectable()
export class UserService {

    constructor(private readonly httpService: HttpService) { }

    getUserDetails() {
        return this.httpService.get<UserDetails>(`${apiBaseUrlUser}/getDetails`)
    }

    saveUserDetails(userDetails: UserDetails) {
        return this.httpService.post<UserDetails>(`${apiBaseUrlUser}/saveDetails`, userDetails, true)
    }



    addUserBalance(balance: number) {
        return this.httpService.post<number>(`${apiBaseUrlUser}/addBalance`, balance, true)
    }

    getUserBalance() {
        return this.httpService.get<number>(`${apiBaseUrlUser}/getBalance`)
    }

    getUserAddress() {
        return this.httpService.get<UserAddress>(`${apiBaseUrlUser}/getUserAddress`)
    }

    saveUserAddress(userAddress: UserAddress) {
        return this.httpService.post<UserAddress>(`${apiBaseUrlUser}/saveUserAddress`, userAddress, true)
    }

    getUserPaymentDetails() {
        return this.httpService.get<UserPaymentDetails>(`${apiBaseUrlUser}/getPaymentDetails`)
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
        return this.httpService.post<UserPaymentDetails>(`${apiBaseUrlUser}/savePaymentDetails`, requestParams, true)
    }

    getUserAttachment() {
        return this.httpService.get<UserAttachment>(`${apiBaseUrlUser}/getUserAttachment`)
    }

    changeUserPassword(password: ChangeUserPassword) {
        return this.httpService.post<ChangeUserPassword>(`${apiBaseUrlUser}/changeUserPassword`, password, true)
    }

    addUserAttachment(file) {
        const formData = new FormData();
        formData.append('file', file);

        return this.httpService.post(`${apiBaseUrlUser}/addUserAttachment`, formData)

    }

    removeUserAttachment() {
        return this.httpService.post(`${apiBaseUrlUser}/removeUserAttachment`)
    }

    getWishlistItems() {
        return this.httpService.get<UserWishlist[]>(`${apiBaseUrlWishlist}/getWishlistItems`)
    }

    addToWishlist(productId: number) {
        return this.httpService.post<number>(`${apiBaseUrlWishlist}/addToWishlist`, productId)
    }
    removeFromWishlist(productId: number) {
        return this.httpService.post<number>(`${apiBaseUrlWishlist}/removeFromWishlist`, productId)
    }


}

