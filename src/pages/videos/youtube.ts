import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component ({
	selector: 'page-youtube',
	template: `
		<ion-header>

			<ion-navbar>

				<ion-title>Sci-Fi & Tech</ion-title>

			</ion-navbar>

		</ion-header>

		<ion-content>
			<iframe src="https://www.youtube.com/embed/Qoo7_9uRDbM" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
		</ion-content>
	`
})

export class YoutubeVideo {
	constructor(public navCtrl: NavController) {
		
	}
}