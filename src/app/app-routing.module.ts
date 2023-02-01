import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { ListadoCanalesComponent } from './listado-canales/listado-canales.component';
import { DetalleSerieComponent } from './detalle-serie/detalle-serie.component';
import { PersonajesSerieComponent } from './personajes-serie/personajes-serie.component';
import { TemporadasSerieComponent } from './temporadas-serie/temporadas-serie.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { DetalleCanalesComponent } from './detalle-canales/detalle-canales.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'series'},
  {path: 'series', component: ListadoSeriesComponent}, 
  {path: 'serie/:serie', component: DetalleSerieComponent, children: [
    
    {path: 'personajes', component: PersonajesSerieComponent},
    {path: 'temporadas', component: TemporadasSerieComponent}
  ]}, 
  {path: 'personajes', component: ListadoPersonajesComponent},
  {path: 'personajes/:personaje', component: DetallePersonajesComponent},
  {path: 'canales', component: ListadoCanalesComponent},
  {path: 'canales/:canal', component: DetalleCanalesComponent},
  {path: '**', redirectTo: 'series'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
