import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      (user) => {
        if (user) {
          this.userLogged = true;
        }
      }
    )
  }

  logoutUser() {
    this.userLogged = false;
    this.auth.logout();
    this.router.navigate(['/bienvenida']);
  }

}
