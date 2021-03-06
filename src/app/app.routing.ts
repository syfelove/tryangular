import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from '../app/components/create-user/create-user.component';
import { ListUserComponent } from '../app/components/list-user/list-user.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  { 
    path: '', 
    redirectTo: '/create', pathMatch: 'full' },
  { path: '', component: AdminLayoutComponent , children : [{
    path : '',
    loadChildren : ()=> import ('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  }]},

];
 


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
