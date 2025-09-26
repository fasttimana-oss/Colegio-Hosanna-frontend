import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NivelCreateComponent } from './nivel-create/nivel-create.component';
import { NivelListComponent } from './nivel-list/nivel-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventListComponent } from './event-list/event-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersCreateComponent,
    UsersListComponent,
    NivelCreateComponent,
    NivelListComponent,
    EventoCreateComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
     ReactiveFormsModule
  ]
})
export class AdminModule { }
