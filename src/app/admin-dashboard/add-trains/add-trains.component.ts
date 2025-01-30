import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';
@Component({
  selector: 'app-add-trains',
  templateUrl: './add-trains.component.html',
  styleUrls: ['./add-trains.component.scss']
})
export class AddTrainsComponent {
  data: any=[];
  
  

constructor(public api:ApiService,
            public sec:UtlitiesService,
){

}

 submit(){

  let url="train";
  const payload = {

    "trainId":this.data.trainId,
    "trainName":this.data.trainName,
    "seatCount":this.data.seatCount
  }

  console.log(this.data.username)

  this.api.postData(url,payload).subscribe({
    
  });
 
}
}
