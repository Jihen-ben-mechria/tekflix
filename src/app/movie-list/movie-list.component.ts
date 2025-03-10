import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})



export class MovieListComponent {
categories : string[] = ['All', 'Action', 'Comedy','Adventure','Drama','Horror','Fantasy','Science Fiction'];
selectedCategory:string = 'All';
films : Film[] = FILMS;
filterFilm?:Film[];


get filteredFilm() : Film[] {
  return this.selectedCategory === 'All'
  ? this.films
  :this.films.filter(f=>f.genre === this.selectedCategory)
}

selectCategory(category: string) {
  this.selectedCategory = category;
  console.log("Selected Category : " ,this.selectedCategory)
}

}
