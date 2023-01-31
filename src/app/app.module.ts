import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoCanalesComponent } from './listado-canales/listado-canales.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { DetalleListadoComponent } from './detalle-listado/detalle-listado.component';
import { DetalleSerieComponent } from './detalle-serie/detalle-serie.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { DetalleCanalesComponent } from './detalle-canales/detalle-canales.component';
import { PersonajesSerieComponent } from './personajes-serie/personajes-serie.component';
import { TemporadasSerieComponent } from './temporadas-serie/temporadas-serie.component';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoCanalesComponent,
    ListadoPersonajesComponent,
    DetalleListadoComponent,
    DetalleSerieComponent,
    DetallePersonajesComponent,
    DetalleCanalesComponent,
    PersonajesSerieComponent,
    TemporadasSerieComponent,
    ListadoSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
