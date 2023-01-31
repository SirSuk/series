import { Component } from '@angular/core';
import { Serie } from '../interfaces/serie';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.css']
})
export class ListadoSeriesComponent {
listadoSeries! : Serie[]

constructor(private servicio: SeriesService) {

}
ngOnInit() {
  this.listadoSeries = this.servicio.getAll()

}

}
