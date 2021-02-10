import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';
import { ISection } from 'src/app/models/app';

@Injectable()
export class SectionsService {

    constructor(
        private http: HttpClient,
        private sharedService: SharedService
    ){}

    // GET SECTIONS
    getSections(): Observable<Object>{
        return this.http.get(`${this.sharedService.domain}/sections`, this.sharedService.headers)
        .pipe(
            retry(1)
        );
    }
    // NEW SECTION 
    create(section: ISection): Observable<Object>{
        console.log(this.sharedService.domain)
        return this.http.post(`${this.sharedService.domain}/sections`, section, this.sharedService.headers)
        .pipe(
            retry(1)
        );
    }
    // UPDATE SECTION
    update(id: string, section: ISection): Observable<Object>{
        return this.http.put(`${this.sharedService.domain}/sections/${id}`, section, this.sharedService.headers)
        .pipe(
            retry(1)
        );
    }
    // REMOVE SECTION
    remove(id: string): Observable<Object>{
        return this.http.delete(`${this.sharedService.domain}/sections/${id}`, this.sharedService.headers)
        .pipe(
            retry(1)
        );
    }
}