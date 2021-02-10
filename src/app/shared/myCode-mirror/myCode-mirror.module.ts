import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCodeMirrorComponent } from './myCode-mirror.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
    declarations: [MyCodeMirrorComponent],
    imports: [
        CommonModule,
        FormsModule,
        CodemirrorModule
    ],
    exports: [MyCodeMirrorComponent]
})
export class MycodeMirrorModule {}