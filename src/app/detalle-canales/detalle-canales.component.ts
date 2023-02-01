import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../services/personajes.service';
import { SeriesService } from '../services/series.service';
import { Serie } from '../interfaces/serie';

@Component({
  selector: 'app-detalle-canales',
  templateUrl: './detalle-canales.component.html',
  styleUrls: ['./detalle-canales.component.css']
})
export class DetalleCanalesComponent {
  listadoDeSeries! : Serie[]

  constructor( private rutaActiva: ActivatedRoute,
    private serviceSeries: SeriesService){}

ngOnInit():void {

this.rutaActiva.params.subscribe(params => {
  console.log(params)
 this.listadoDeSeries = this.serviceSeries.getSeriesByCanal(params['canal'].split('-').join( ' '))

})
}


}
