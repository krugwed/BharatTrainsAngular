import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
cancelBooking() {
throw new Error('Method not implemented.');
}
bookings: any;
cancelTicket() {
throw new Error('Method not implemented.');
}
getAllBookings() {
throw new Error('Method not implemented.');
}
  data: any=[];
  
  

constructor(public api:ApiService,
            public sec:UtlitiesService,
            private router: Router
){

}

 submit(){

  let url="auth/users/login";
  const payload = {

    "username":this.data.username,
    "password":this.data.password
  }

  console.log(this.data.username)

  this.api.postData(url,payload).subscribe((res:any)=>{


  });
 
}
}
