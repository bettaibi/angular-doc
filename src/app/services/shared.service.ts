import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Host } from './host.enum';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    domain = Host.URL;
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(){}
}