import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.scss']
})
export class CancelTicketComponent {
  data: any = {
    bookingId: ''
  };
  cancelResponse: any = null;

  constructor(public api: ApiService, public sec: UtlitiesService) {}

  cancelBooking(): void {
    this.api.cancelBooking(this.data.bookingId).subscribe({
      next: (res: any) => {
        this.cancelResponse = res;
      },
      error: (err: any) => {
        console.error('Failed to cancel booking', err);
      }
    });
  }
}
