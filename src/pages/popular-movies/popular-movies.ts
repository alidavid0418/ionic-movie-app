import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';


@IonicPage()
@Component({
  selector: 'page-popular-movies',
  templateUrl: 'popular-movies.html',
})
export class PopularMoviesPage {
  popularMovies:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieService: MovieServiceProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.movieService.getPopularMovies()
    .subscribe(res => {
      this.popularMovies = res.results;
    });

    console.log('ionViewDidLoad PopularMoviesPage');
  }

  launchMovieDetailsPage(movie) {
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);
    movieModal.present();
  }

}
