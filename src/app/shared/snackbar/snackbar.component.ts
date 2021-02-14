import { Component, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements AfterViewInit {
    message: string;
    private _onClose = new Subject<any>();
    public onClose = this._onClose.asObservable();

    constructor() {        
    }

    ngAfterViewInit(): void{}

    destroyComponent(): void{
        this._onClose.next();
    }
}
