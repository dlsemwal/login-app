import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: HomeComponent
        // children: [
        //   // { path: '', redirectTo: 'home', pathMatch: 'full' },
        //   { path: '', component: HomeComponent},
        // ]
      }
    ])
  ]
})
export class DashboardModule {
 }
