import { Component } from '@angular/core';
import { Serie } from '../interfaces/serie';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent {
urlPadre: string = ''
infoSerie!: Serie


constructor( private activateRoute: ActivatedRoute,
             private service: SeriesService,
             private router: Router){}

ngOnInit():void {
  
  this.activateRoute.params.subscribe(param => {
    this.urlPadre = param['serie']
   const descripcion = this.urlPadre.split('-')
  
   const id = descripcion[descripcion.length-1]
   const response = this.service.getById(Number(id))
    if(response) {
      this.infoSerie = response
    }


})
}

goToPersonajes(){
  this.router.navigate(['/serie' , this.urlPadre , 'personajes'])
}

}