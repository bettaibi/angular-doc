import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/shared/sidenav/sidenav.module';

var routes: Routes = [
    { path: '', component: AdminComponent, children: [
        {path: '', pathMatch: 'full', redirectTo: 'sections'},
        { path: 'sections', loadChildren: () => import('./sections/sections.module').then(m => m.SectionsModule)},
        { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)}
    ]},
];

@NgModule({
    declarations: [
        AdminComponent,
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        SidenavModule
    ]
})
export class AdminModule {}