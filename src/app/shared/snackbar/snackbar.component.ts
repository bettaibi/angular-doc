import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements AfterViewInit, OnDestroy {
    message: string;

    constructor() { }

    ngAfterViewInit(): void{

    }

    ngOnDestroy(): void{

    }
}
