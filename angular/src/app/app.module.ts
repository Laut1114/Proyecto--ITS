import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormIngresoComponent } from './componentes/form-ingreso/form-ingreso.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    FormIngresoComponent,
    InicioComponent,
    BarraSuperiorComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
