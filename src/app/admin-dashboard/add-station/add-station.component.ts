import { Component } from '@angular/core';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.scss']
})
export class AddStationComponent {
  stations = [{ trainId: '', station: '', journeyDate: '', seats: '' }];

  addStation() {
    this.stations.push({ trainId: '', station: '', journeyDate: '', seats: '' });
  }

  removeStation(index: number) {
    this.stations.splice(index, 1);
  }

  onSubmit() {
    console.log(this.stations);
    // Add your logic to handle the form submission
  }
}
