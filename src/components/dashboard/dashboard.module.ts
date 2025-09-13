import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { PlanDetailsComponent } from '../plan-details/plan-details.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    PlanDetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ]
})
export class DashboardModule { }
