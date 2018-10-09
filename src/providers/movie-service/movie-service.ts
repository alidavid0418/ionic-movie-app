import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieServiceProvider {
  apiKey:string = '9a32bccc0995a38d7c700d0b4fa8a79d'; // insert your TMDb api key here

  constructor(public http: Http) {
    console.log('Hello MovieServiceProvider Provider');
  }

  // function that returns the current popular movies from the TMDb
  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .map(res => res.json());
  }

  // function that returns movies that are currently showing in cinemas from the TMDb
  getInTheaters() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey + '&language=en-US&primary_release_date.gte=2018-01-01&primary_release_date.lte=2018-10-08&include_adult=false&include_video=false&page=1')
      .map(res => res.json());
  }

  // use TMDb search api to return movies based on the user search
  searchMovies(searchStr:string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + searchStr + '&language=en-US&primary_release_date.gte=2018-01-01&primary_release_date.lte=2018-10-08&include_adult=false&include_video=false&page=1')
      .map(res => res.json());
  }

  // return information on a particular movie using its ID
  getMovie(id) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.apiKey + '&language=en-US')
      .map(res => res.json());
  }

  // return list of genres in TMDb
  getGenres() {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey + '&language=en-US')
      .map(res => res.json());
  }

  // return list of movies with a specified genre
  getMoviesByGenre(genreId) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreId)
      .map(res => res.json());
  }

}
