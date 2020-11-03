import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { AuthenticateUserModel } from 'src/app/models/authenticate-user.model';
import { Constants } from '../constants';
import { HttpService } from '../http/http.service';
import { AuthUserModel, JsonWebToken } from './authentification-response.model';
import { map } from 'rxjs/operators'

const apiBaseUrl = "http://localhost:56902/api/account";

@Injectable()
export class AuthorizationService {

    isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.cookieService.get(Constants.KEY_OUT_USER) != "");

    getAuthUserData(): AuthUserModel {
        const AuthUserCookie = this.cookieService.get(Constants.KEY_OUT_USER);

        if (AuthUserCookie === "") {
            window.location.reload();

            return <any>{};
        }

        return JSON.parse(AuthUserCookie);
    }

    constructor(
        private readonly httpService: HttpService,
        private readonly cookieService: CookieService,
        private readonly router: Router) { }

    login(user: AuthenticateUserModel) {
        return this.httpService.get<AuthUserModel>(`${apiBaseUrl}/login`, user)
            .pipe(map(response => {
                response.jwt.expiresOnClient = new Date((new Date()).getTime() + response.jwt.expiresMinutes * 30000).getTime();
                response.jwt.expiresOnServer = new Date((new Date()).getTime() + response.jwt.expiresMinutes * 60000).getTime();

                this.cookieService.set(
                    Constants.KEY_OUT_USER,
                    JSON.stringify(response),
                    new Date(response.jwt.expiresOnServer),
                    "/"
                );

                this.isAuthenticated.next(true);

                this.router.navigate(['/']);
            }));
    }

    refreshToken() {
        return this.httpService.get<JsonWebToken>(`${apiBaseUrl}/refreshToken`)
            .pipe(map(response => {
                const authUserCookie = this.cookieService.get(Constants.KEY_OUT_USER)
                const authUserData = <AuthUserModel>JSON.parse(authUserCookie);

                response.expiresOnClient = new Date((new Date()).getTime() + response.expiresMinutes * 30000).getTime();
                response.expiresOnServer = new Date((new Date()).getTime() + response.expiresMinutes * 60000).getTime();

                this.cookieService.set(
                    Constants.KEY_OUT_USER,
                    JSON.stringify({ ...authUserData, jwt: response }),
                    new Date(response.expiresOnServer),
                    "/"
                );

                return response.accessToken;

            }));
    }

    logout() {
        this.cookieService.delete(Constants.KEY_OUT_USER, '/');
    }
}