import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-movie-delail',
  standalone: false,
  templateUrl: './movie-delail.component.html',
  styleUrl: './movie-delail.component.css'
})
export class MovieDelailComponent {
 filmsId?: any; //? ou ! càd ataw baaed netsaref fil init
 films : Film[] = FILMS;
 film? : Film;
 safeTrailerUrl! : SafeResourceUrl;
 showModal = false ;


  constructor(private route : ActivatedRoute, private sanitizer: DomSanitizer ,
    private filmService : FilmService)   {}

  ngOnInit() {
    console.log("INSIDE ngOnInit");
    this.filmsId = this.route.snapshot.paramMap.get('id')
   console.log("ID film ", this.filmsId)
   this.film = this.filmService.GetFilmById(parseInt(this.filmsId))
   console.log("Film : ", this.film)
  }


  openModal() {
    if (this.film && this.film.trailerUrl) {
      const embedUrl = this.film.trailerUrl.replace("watch?v=", "embed/");
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }

}
