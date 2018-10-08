import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  results:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieService: MovieServiceProvider, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchMovies(ev: any) {
    let val = ev.target.value; // value of the searchbar

    this.movieService.searchMovies(val)
    .subscribe(data => {
      this.results = data.results;
    });
  }

  launchMovieDetailsPage(movie) {
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);
    movieModal.present();
  }

  dismiss() {
    // close search modal and return to homepage
    this.viewCtrl.dismiss();
  }

}
