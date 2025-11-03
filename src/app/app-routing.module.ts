
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import{ AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';
const routes: Routes = [
  { path: '', component: InicioComponent }, // raíz
  { path: 'Inicio', component: InicioComponent }, // Inicio real
  { path: 'nosotros', component: NosotrosComponent }, // Nosotros real
  {path: 'contacto', component:ContactoComponent},
  
   { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // 👆 esto carga todo lo que esté en AuthRoutingModule



  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] }
  },

 {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['alumno'] }
  },

   {
    path:  'docente',
    loadChildren:() => import('./docente/docente.module').then(m => m.DocenteModule),
    canActivate:[AuthGuard,RoleGuard],
    data:{roles:['docente']}
   }
 




];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
