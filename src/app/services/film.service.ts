import { Injectable } from '@angular/core';
import { Film, FILMS } from '../models/film';


@Injectable ({
  providedIn : 'root'
})
export class FilmService {

films : Film[] = FILMS
  constructor() { }

  getAllFilms() {
    return this.films;
  }

  GetFilmById(id : number) {
  return this.films.find(f=> f.id == id)
}
}
