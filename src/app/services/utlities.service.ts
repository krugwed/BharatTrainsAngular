import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtlitiesService {
  
  snackBar: any;
  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error']
    });
  }

  jwtToken: any;
  userType: any;
  userId: any;

  constructor() { }

  setToken(token: string, userType: string): void {
    this.jwtToken = token;
    this.userType = userType;
    localStorage.setItem('jwt', token);
    localStorage.setItem('userType', userType);
  }

  getToken(): string | null {
    console.log(this.jwtToken)
    return this.jwtToken || localStorage.getItem('jwt');
  }

  getUserType(): string | null {
    return this.userType || localStorage.getItem('userType');
  }

  setUserId(userId: string): void {
    this.userId = userId;
    localStorage.setItem('userId', userId);
  }

  getUserId(): string | null {
    return this.userId || localStorage.getItem('userId');
  }
}
