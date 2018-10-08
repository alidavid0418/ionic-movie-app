import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';


@IonicPage()
@Component({
  selector: 'page-movies-by-genre',
  templateUrl: 'movies-by-genre.html',
})
export class MoviesByGenrePage {
  movies:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieService: MovieServiceProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.movieService.getMoviesByGenre(this.navParams.get('id'))
    .subscribe(data => {
      this.movies = data.results;
    });

    console.log('ionViewDidLoad MoviesByGenrePage');
  }

  launchMovieDetailsPage(movie) {
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);
    movieModal.present();
  }

}
