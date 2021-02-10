import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarService } from './snackbar.service';

@NgModule({
    declarations: [
        SnackbarComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [SnackbarService],
    entryComponents: [SnackbarComponent]
})
export class SnackbarModule { }