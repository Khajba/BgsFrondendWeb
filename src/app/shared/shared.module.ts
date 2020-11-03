import { NgModule } from "@angular/core";
import {MessageService} from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    exports : [
        FormsModule,
        InputTextModule,
        ButtonModule
    ],
    providers: [MessageService],

})
export class SharedModule {

}