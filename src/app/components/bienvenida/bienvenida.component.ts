import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  githubData: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getGithubData('perez-artaso').subscribe(
      (gData) => {
        this.githubData = gData;
      }
    );
  }

}
