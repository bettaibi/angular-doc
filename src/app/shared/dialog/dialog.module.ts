import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { InsertionDirective } from './insertion.directive';

@NgModule({
    declarations: [
        DialogComponent,
        InsertionDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [InsertionDirective],
    providers: [DialogService],
    entryComponents: [DialogComponent]
})
export class DialogModule {}