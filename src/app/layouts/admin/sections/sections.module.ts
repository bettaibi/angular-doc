import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionsService } from './sections.service';
import { AccordionModule } from 'src/app/shared/accordion/accordion.module';

const routes: Routes = [{path: '', component: SectionsComponent}]

@NgModule({
    declarations: [
        SectionsComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        SectionsService
    ]
})
export class SectionsModule {}