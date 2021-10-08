import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit, OnChanges {

  @Input('country') country: any;
  countryInfo: any;

  constructor(private data: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.country) {
      this.data.getCountryByName(this.country).subscribe(
        (countryInfo: any) => {
          this.countryInfo = countryInfo;
        }
      )
    }

  }

  ngOnInit(): void {
  }

}
