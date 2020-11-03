import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly messageService: MessageService
    ) { }

    get<TData>(url: string, queryParams?: {}, showDefaultMessage?: boolean) {
        return this.httpClient
            .get<TData>(`${url}?${this.getQueryParams(queryParams).toString()}`)
            .pipe(map(response => this.handleResponse(response, showDefaultMessage)))
    }

    post<TData>(url: string, body: any, showDefaultMessage?: boolean) {
        return this.httpClient
            .get<TData>(url, body)
            .pipe(map(response => this.handleResponse(response, showDefaultMessage)))
    }


    private getQueryParams(filter: any): URLSearchParams {
        const params = new URLSearchParams();

        for (let field of filter) {
            params.set(field, filter[field])
        }

        return params;
    }

    private handleResponse<TData>(response: TData, showDefaultMessage: boolean) {
        if (showDefaultMessage) {
            this.messageService.add({ severity: 'success', detail: 'Operation completed successfully' })
        }

        return response;
    }
}