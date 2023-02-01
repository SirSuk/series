import { Component } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-listado-canales',
  templateUrl: './listado-canales.component.html',
  styleUrls: ['./listado-canales.component.css']
})
export class ListadoCanalesComponent {
  listadoCanales!: any[]

  constructor( private service: SeriesService) {}

  ngOnInit():void {
    const listadoCanales = this.service.getCanales()
    this.listadoCanales = listadoCanales.map(canal => {
      return{
       canal: canal,
       nombreUrl: canal.split(' ').join('-')
    }}
  )   
  }}

