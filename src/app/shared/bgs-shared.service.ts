import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BgsSharedService {

    productFilter : Subject<any> = new Subject<any>();

    productFilter$ = this.productFilter.asObservable();

    showNumber : Subject<any> = new Subject<any>();

    showNumber$ = this.showNumber.asObservable();
}