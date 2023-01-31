import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }


  getPersonajesByPelicula(idSerie:number)  {
    return PERSONAJES.filter(person => person.serie === idSerie)
  }
}
