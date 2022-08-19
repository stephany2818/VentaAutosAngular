import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './autos/inicio/inicio.component';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { DetalleAutosGuard } from './autos/detalle-autos.guard';
import { ClientesComponent } from './clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent, 
    ListaAutosComponent, 
    AEspacioPipe, 
    DetalleAutosComponent, 
    InicioComponent, 
    EstrellasComponent, ClientesComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "autos", component: ListaAutosComponent},
      {path: "auto/:id", component: DetalleAutosComponent, canActivate: [DetalleAutosGuard]},
      {path: "inicio", component: InicioComponent},
      {path: "clientes", component: ClientesComponent},
      {path: "", redirectTo: "inicio", pathMatch: "full"},
      {path: "**", redirectTo: "inicio", pathMatch: "full"},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
