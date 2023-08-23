import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  // Inject HttpClient

  constructor(private moviesService: MoviesService) { }

  isActive = false;

  fanFavoriteMovies: any[] = [];

  topMovies: any[] = [];

  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
}

// getFanFavoriteMovies(){

//   this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json')
// .pipe(
  
//   catchError((error) => {
//     console.log('[getFanFavoriteMovies] Error loading fan favorites data:', error);

//     return of(null)
//   })
//   ).subscribe((data) =>{
//     if(data){
//     this.fanFavoriteMovies = data;
//   }else{
//     this.fanFavoriteMovies = [];
//   }
//   });
// }

getFanFavoriteMovies() {
  this.moviesService.getFanFavoriteMovies()
  .subscribe({
    next: (data: any[]) => {
      this.fanFavoriteMovies = data;
    },
    error: (error) => {
      console.log('[getFanFavoriteMovies] Error:', error);
    },
    complete: () => {
      console.log('[getFanFavoriteMovies] Request completed successfully');
    }
  });
}


  getTopMovies(){

    this.moviesService.getTopMovies()
    .subscribe({
      next: (data:any[]) => {
        this.topMovies = data;
      },
      error: (error) => {
        console.log('[getTopMovies] Error loading Top Movies');
      },
      complete: () => {
        console.log('[getTopMovies] Request completed successfully');
      }
    });
  }


}
