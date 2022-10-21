import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { 
    path:'', 
    component: InicioComponent,
  },
  {
    path:'ingreso2022',
    component: IngresoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
