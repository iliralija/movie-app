import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.scss']
})
export class DetailsReviewsComponent implements OnInit{

  movieRate: any[] = [];

  constructor(private moviesServices: MoviesService) { }

  ngOnInit(): void {
    this.loadMovieRates();
    
  }

  loadMovieRates(){
    this.moviesServices.loadMovieRates()
    .subscribe((data:any[]) => {
      this.movieRate = data;
    })
  }
}
