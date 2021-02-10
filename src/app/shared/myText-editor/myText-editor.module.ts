import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTextEditorComponent } from './myText-editor.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from '../dialog/dialog.module';
import { SnackbarModule } from '../snackbar/snackbar.module';
import { CodePreviewComponent } from './code-preview/code-preview.component';

@NgModule({
    declarations: [MyTextEditorComponent, CodePreviewComponent],
    imports: [ 
        CommonModule,
        FormsModule,
        DialogModule,
        SnackbarModule
    ],
    exports: [MyTextEditorComponent],
    entryComponents: [CodePreviewComponent]
})
export class MyTextEditorModule {}