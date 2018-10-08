import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

@IonicPage() // apply the IonicPage decorator
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  genres:any[] = [];

  constructor(public navCtrl: NavController, public movieService:MovieServiceProvider, public modalCtrl:ModalController) {

  }

  ionViewDidLoad() {
    this.movieService.getGenres()
    .subscribe(data => {
      this.genres = data.genres;
    });

    console.log('ionViewDidLoad - InTheatresPage');
  }

  launchMoviesByGenrePage(genre) {
    // use NavController to navigate to the next page and pass into the genre object chosen by user
    this.navCtrl.push('MoviesByGenrePage', genre);
  }

  launchSearchModal() {
    let modal = this.modalCtrl.create('SearchPage');
    modal.present();
  }

}
