import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtlitiesService } from 'src/app/services/utlities.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}
