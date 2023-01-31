import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  constructor() { }

  getAll() {
    return SERIES;
  }

  getById(id:number) {
    return SERIES.find(serie => serie.id === id)
  }
}
