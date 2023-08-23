import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.scss']
})
export class DetailsMoviesComponent implements OnInit{

  similarMovies: any[] = [];

  constructor(private moviesServices: MoviesService) { }

  ngOnInit(): void {
    this.loadSimilarMovies();
    
  }

  loadSimilarMovies(){
    this.moviesServices.loadSimilarMovies()
    .subscribe((data:any[]) => {
      this.similarMovies = data;
    })
  }

}
