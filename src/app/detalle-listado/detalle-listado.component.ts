import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-listado',
  templateUrl: './detalle-listado.component.html',
  styleUrls: ['./detalle-listado.component.css']
})
export class DetalleListadoComponent {
@Input() texto: string = '';
@Input() imagen: string = '';
@Input() id!: number;
@Input() url: string= '';


constructor(private router: Router){}


ngOnInit():void {
  
}

goToSerie() {
 console.log("goToSerie Works")
  const detalleUrl= this.texto?.split(' ').join('-') + '-' + this.id?.toString()
  this.router.navigate([this.url, detalleUrl ])
}
}
