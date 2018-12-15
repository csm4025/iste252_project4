import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: 'restaurants.page.html',
  styleUrls: ['restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants: any[] = [];

  constructor(private route:ActivatedRoute, private api:ApiService) { }

  ngOnInit() {
    const estId = this.route.snapshot.paramMap.get('estId');
    console.log(estId);
    this.getRestaurants(estId);
  }

  getRestaurants(estId) {
    if(estId) {
      let resObs: Observable<any> = this.api.getRestaurants(estId);
      resObs.subscribe(
          data => {
            console.log('Server responded with this:');
            console.log(data);
            this.restaurants = data.restaurants;
          },
          err => {
            console.error('Server responded with an error:');
            console.error(err);
          }
      );
    }
  }

}
