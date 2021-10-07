import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGithubData(username: string) {
    return this.http.get("https://api.github.com/users/" + username);
  }

  getCountries() {
    return this.http.get("https://restcountries.com/v3.1/region/americas");
  }

}
