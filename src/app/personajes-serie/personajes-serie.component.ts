import { Component } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { PersonajesService } from '../services/personajes.service';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-personajes-serie',
  templateUrl: './personajes-serie.component.html',
  styleUrls: ['./personajes-serie.component.css']
})
export class PersonajesSerieComponent {

personajes!: Personaje[]

  constructor(private service: PersonajesService,
              private activateRoute: ActivatedRoute){}

  ngOnInit() {

    this.activateRoute.parent?.params.subscribe(param => {
     const descripcion = param['serie'].split('-')
      const id = descripcion[descripcion.length - 1]
      this.personajes = this.service.getPersonajesByPelicula(parseInt(id))
   
  })

}
}
