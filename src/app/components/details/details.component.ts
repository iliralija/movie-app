import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

   movieId = '';

    stars = [];

    genres = [];

    directors = [];

  constructor(private activatedRoute: ActivatedRoute,
    private moviesServices: MoviesService) { 
    this.activatedRoute.params.subscribe((p) => {
      this.movieId = p['id'];

      console.log('Movie Id = ' + this.movieId);
    })
  }

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary(){
    this.moviesServices.loadMovieSummary()
    .subscribe((data:any) => {
      this.stars = data.stars;
      this.genres = data.genres;
      this.directors = data.directors;
    })
  }
}
