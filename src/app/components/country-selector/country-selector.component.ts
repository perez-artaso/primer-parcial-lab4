import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {

  countries: any[] = [];
  @Output('onCountryEmit') countryEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getCountries().subscribe(
      (countriesObj) => {
        this.countries = countriesObj as any;
      }
    )
  }

  emitCountry(name: string) {
    this.countryEmitter.emit(name);
  }

}
