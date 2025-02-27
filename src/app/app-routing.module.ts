import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path : '', redirectTo : 'home',pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'movie-list' ,component: MovieListComponent },
  {path :'**', component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
