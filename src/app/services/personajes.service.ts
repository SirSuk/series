import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  getAll() {
    return PERSONAJES
  }

  getPersonajesByPelicula(idSerie:number)  {
    return PERSONAJES.filter(person => person.serie === idSerie)
  }

  getByID(idPersonaje:number) {
    return PERSONAJES.find(pj => pj.id === idPersonaje)
  }
}
