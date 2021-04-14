import { Component, OnInit } from '@angular/core';
import {  MovieService} from '../Services/movie.service'; // i add this

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movie:any = [];
  constructor(private movieService: MovieService) { // i add movie service
  }


ngOnInit(){
this.movieService.GetMovieData().subscribe(
  (data)=>{
    this.movie = data.Search;
    console.log(this.movie)
  }
);
    
}

}
