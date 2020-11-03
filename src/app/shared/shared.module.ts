import { NgModule } from "@angular/core";
import {MessageService} from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';

@NgModule({
    exports : [
        FormsModule,
        InputTextModule,
        ButtonModule,
        ToastModule
    ],
    providers: [MessageService],

})
export class SharedModule {

}