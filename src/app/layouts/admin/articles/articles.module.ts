import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';
import { Routes, RouterModule } from '@angular/router';
import { MycodeMirrorModule } from 'src/app/shared/myCode-mirror/myCode-mirror.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTextEditorModule } from 'src/app/shared/myText-editor/myText-editor.module';

const routes: Routes = [
    {path: '', component: ArticlesComponent}
];

@NgModule({
    declarations: [
        ArticlesComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        MycodeMirrorModule,
        FormsModule,
        ReactiveFormsModule,
        MyTextEditorModule
     ],
    providers: []
})
export class ArticlesModule {}