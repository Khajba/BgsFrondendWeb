import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
    exports: [
        FormsModule,
        InputTextModule,
        ButtonModule,
        ToastModule,
        DropdownModule
    ]
})
export class BgsSharedModule { }