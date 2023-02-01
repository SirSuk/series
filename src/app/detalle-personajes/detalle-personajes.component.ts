import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../interfaces/personaje';
import { PersonajesService } from '../services/personajes.service';
import { Serie } from '../interfaces/serie';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.css']
})
export class DetallePersonajesComponent {
  personaje!:Personaje
  serie!: Serie

  constructor( private rutaActiva: ActivatedRoute,
               private service: PersonajesService,
               private serviceSeries: SeriesService){}

ngOnInit():void {

this.rutaActiva.params.subscribe(params => {
  const actorName = params['personaje'].split('-')
  const id= actorName[actorName.length - 1]
  const response = this.service.getByID(parseInt(id))

  if(response) {
    this.personaje = response
    const responseSerie = this.serviceSeries.getById(this.personaje.serie)
    if(responseSerie) {
      this.serie=responseSerie
    }
   
  }
})
}




}
