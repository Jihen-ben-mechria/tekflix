import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  wishlistItems = [
    { id: 1, title: 'Captain America', description: 'Un soldat transformé en super-héros combat les nazis pendant la Seconde Guerre mondiale.', image: '/captain_america.jfif', rating: 8.1, year: 2011, genre: 'Action' },
    { id: 2, title: 'The Sand Castle', description: 'Un drame de guerre suivant un jeune soldat au Moyen-Orient.', image: '/the_sand_castle.jfif', rating: 7.9, year: 2017, genre: 'Drama' },
    { id: 3, title: 'Back Action', description: 'Un film d\'action où un agent secret empêche une catastrophe mondiale.', image: '/back_action.jfif', rating: 8.5, year: 2020, genre: 'Action' }
  ];

}
