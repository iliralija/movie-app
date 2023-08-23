import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  movieTitle = '';
  searchResult: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private moviesServices: MoviesService) {
    this.activatedRoute.params.subscribe((p) => {
      this.movieTitle = p['movieTitle'];
    })
   }

  ngOnInit(): void {
    this.searchMovies();
    
  }

  searchMovies(){
    this.moviesServices.searchMovies()
    .subscribe((data:any[]) => {
      this.searchResult = data;
    })
  }

}
