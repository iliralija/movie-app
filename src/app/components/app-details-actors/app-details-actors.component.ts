import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-app-details-actors',
  templateUrl: './app-details-actors.component.html',
  styleUrls: ['./app-details-actors.component.scss']
})
export class AppDetailsActorsComponent implements OnInit{

  movieActors: any[] = [];

  constructor(private moviesServices: MoviesService) { }

  ngOnInit(): void {
    this.loadMovieActors();
  }

  loadMovieActors(){
    this.moviesServices.loadMovieActors()
    .subscribe((data:any[]): void => {
      this.movieActors = data;
    })
  }
}
