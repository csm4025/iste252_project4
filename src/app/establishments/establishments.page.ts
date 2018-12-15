import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-establishments',
  templateUrl: 'establishments.page.html',
  styleUrls: ['establishments.page.scss'],
})
export class EstablishmentsPage implements OnInit {

  establishments: any[] = [];

  constructor(private route:ActivatedRoute, private api:ApiService) { }

  ngOnInit() {
    const cityId = this.route.snapshot.paramMap.get('cityId');
    console.log(cityId);
    this.getEstablishments(cityId);
  }

  getEstablishments(cityId) {
    if(cityId) {
      let estObs: Observable<any> = this.api.getEstablishments(cityId);
      estObs.subscribe(
          data => {
            console.log('Server responded with this:');
            console.log(data);
            this.establishments = data.establishments;
          },
          err => {
            console.error('Server responded with an error:');
            console.error(err);
          }
      );
    }
  }
}
