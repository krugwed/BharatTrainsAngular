import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtlitiesService } from './utlities.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private utilitiesService: UtlitiesService) {}


login(userData: any) {
    // Save userId in session storage
    sessionStorage.setItem('userId', userData.id);
    // Redirect to the user dashboard
    this.router.navigate(['/user-dashboard']);
  }
  logout() {
    // Clear the authentication tokens
    localStorage.removeItem('jwt');
    localStorage.removeItem('userType');
    this.utilitiesService.jwtToken = null;
    this.utilitiesService.userType = null;

    // Redirect to the login page
    this.router.navigate(['/signin']);
  }
}
