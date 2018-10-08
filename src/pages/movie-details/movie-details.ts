import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';


@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  movie:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieService: MovieServiceProvider, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.movieService.getMovie(this.navParams.get('id'))
    .subscribe(movie => {
      this.movie = movie;
    });

    console.log('ionViewDidLoad MovieDetailsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
