import { NgModule } from "@angular/core";
import { HttpService } from '../http/http.service';
import { AuthorizationGuard, LoginAuthGuard } from './auth.guard';
import { AuthorizationService } from './authorization-service';

@NgModule({
    exports: [],
    providers: [
        AuthorizationGuard,
        AuthorizationService,
        LoginAuthGuard
    ]
})

export class AuthorizationModule {

}