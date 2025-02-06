import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { UtlitiesService } from './utlities.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  updateProfile(url: string, user: any) {
    throw new Error('Method not implemented.');
  }
 

  constructor(public http:HttpClient ,public utilitiesService: UtlitiesService) { }

   apiBase="http://localhost:8083/api/"
  postData(url:any , payload :any):Observable<any>{

    return this.http.post<any>(this.apiBase+url,payload)

  }
  getData(url:any):Observable<any>{
    return this.http.get<any>(this.apiBase+url);
  }

  putData(url: any, payload: any): Observable<any> {
    return this.http.put<any>(url, payload);
  }

  getUserData(url: any, userId: any): Observable<any> {
    const fullUrl = `${this.apiBase}${url}/${userId}`;
    return this.http.get<any>(fullUrl);
  }

  getBookings(url: any, userId: any): Observable<any> {
    const fullUrl = `${this.apiBase}${url}/${userId}`;
    return this.http.get<any>(fullUrl);
  }

  deleteUser(url: any, userId: any): Observable<any> {
    const fullUrl = `${this.apiBase}${url}/${userId}`;
    return this.http.delete<any>(fullUrl);
  }

  getStations(): Observable<any> {
    const url = 'train/stations';
    console.log("in get stations api");
    return this.http.get<any>(this.apiBase + url); // Assuming no payload is needed
  }

  cancelBooking(bookingId: any): Observable<any> {
    const url = `train/booking/cancel/${bookingId}`;
    return this.http.post<any>(this.apiBase + url, {});
  }

  bookTicket(searchResponse: any, userId: any): Observable<any> {
    const url = `train/booking/book/${userId}`;
    return this.http.post<any>(this.apiBase + url, searchResponse);
  }


}
