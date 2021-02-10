import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/shared/sidenav/sidenav.module';
import { AccordionModule } from 'src/app/shared/accordion/accordion.module';

var routes: Routes = [
    {path: '', component: GuestComponent}
]

@NgModule({
    declarations: [GuestComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        SidenavModule,
        AccordionModule
    ]
})
export class GuestModule {}