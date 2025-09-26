import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NivelCreateComponent } from './nivel-create/nivel-create.component';
import { NivelListComponent } from './nivel-list/nivel-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'users/create', component: UsersCreateComponent},
  {path: 'users/list', component: UsersListComponent},
  { path: 'users/edit/:id', component: UsersCreateComponent },
  {path: 'nivel/create', component: NivelCreateComponent},
  {path: 'nivel/list', component: NivelListComponent},
  {path: 'eventos/create', component: EventoCreateComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
