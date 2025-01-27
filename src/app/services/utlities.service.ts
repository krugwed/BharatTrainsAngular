import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtlitiesService {

  jwtToken: any;
  userType: any;

  constructor() { }

  setToken(token: string, userType: string): void {
    this.jwtToken = token;
    this.userType = userType;
    localStorage.setItem('jwt', token);
    localStorage.setItem('userType', userType);
  }

  getToken(): string | null {
    return this.jwtToken || localStorage.getItem('jwt');
  }

  getUserType(): string | null {
    return this.userType || localStorage.getItem('userType');
  }
}
