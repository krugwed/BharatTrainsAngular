import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent {
  
  bookings: any[] = [];

  constructor(public api: ApiService, public sec: UtlitiesService) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    const url = 'train/booking';
    const userId = this.sec.getUserId();

    this.api.getBookings(url, userId).subscribe({
      next: (res: any) => {
        this.bookings = res;
      },
      error: (err: any) => {
        console.error('Failed to fetch bookings', err);
      }
    });
  }

}
