import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { RegisterUserModel } from 'src/app/models/authenticate-user.model';

const apiBaseUrl = "http://localhost:56902/api/account";
@Injectable()
export class AccountService {
    
    constructor(private readonly httpService :HttpService) {}

    registerUser (user: RegisterUserModel){
        return this.httpService.post<RegisterUserModel>(`${apiBaseUrl}/registerUser`,user)
    }
}