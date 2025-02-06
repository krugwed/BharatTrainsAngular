import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.scss']
})
export class AddStationComponent {
  stations = [{ trainId: '', station: '', journeyDate: '', seatsString: '' }];
  data: any = [];

  addStation() {
    this.stations.push({ trainId: '', station: '', journeyDate: '', seatsString: '' });
  }

  removeStation(index: number) {
    this.stations.splice(index, 1);
  }

  constructor(public api: ApiService, public sec: UtlitiesService) {}

  submit() {
    let url = "train/seats";
    const payload = this.stations.map(station => ({
      trainId: station.trainId,
      station: station.station,
      journeyDate: station.journeyDate,
      seats: station.seatsString.split(',').map(seat => parseInt(seat.trim(), 10))
    }));

    console.log('Submitting payload:', payload);

    this.api.postData(url, payload).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.sec.showSuccess('Stations added successfully!');
      },
      error: (error) => {
        console.error('Error:', error);
        this.sec.showError('Failed to add stations. Please try again.');
      }
    });
  }
}
