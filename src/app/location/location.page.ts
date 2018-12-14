import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html',
  styleUrls: ['location.page.scss']
})
export class LocationPage {
  location_suggestions: any[] = [];
  public searchInput;

  constructor(private api: ApiService) { }

  logSearch(event) {
    console.log(event);
  }

  getLocations() {
    if (this.searchInput) {
      let locObs: Observable<any> = this.api.getLocations(this.searchInput);
      locObs.subscribe(
        data => {
          console.log('Server responded with this:');
          console.log(data);
          this.location_suggestions = data.location_suggestions;
        },
        err => {
          console.error('Server responded with an error:');
          console.error(err);
        }
      );
    }
  }
}
