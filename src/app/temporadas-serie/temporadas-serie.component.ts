import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-temporadas-serie',
  templateUrl: './temporadas-serie.component.html',
  styleUrls: ['./temporadas-serie.component.css']
})
export class TemporadasSerieComponent {

  temporadas!: string[] | undefined

  constructor(private activateRoute: ActivatedRoute,
              private servicio: SeriesService) {

  }

  ngOnInit(): void {

    this.activateRoute.parent?.params.subscribe(param => {
      const descripcion = param['serie'].split('-')
      const id = descripcion[descripcion.length - 1]
      const serie= this.servicio.getById(parseInt(id))
      this.temporadas = serie?.temporadas
       
})


  }
}