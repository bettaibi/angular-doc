import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


var routes: Routes = [
  {path: '', loadChildren: ()=> import('../app/layouts/guest/guest.module').then(m=>m.GuestModule)},
  {path: 'admin', loadChildren: ()=>import('../app/layouts/admin/admin.module').then(m=> m.AdminModule)},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
