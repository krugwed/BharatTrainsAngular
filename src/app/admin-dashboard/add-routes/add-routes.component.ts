import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.scss']
})
export class AddRoutesComponent {
  routes = [{ trainId: '', station: '', arrivalTime: '', departureTime: '', journeyDate: '' }];
  
  constructor(public api: ApiService, public sec: UtlitiesService) {}

  addRoute() {
    this.routes.push({ trainId: '', station: '', arrivalTime: '', departureTime: '', journeyDate: '' });
  }

  removeRoute(index: number) {
    this.routes.splice(index, 1);
  }

  onSubmit() {
    let url = "train/routes";
    const payload = this.routes; // Directly use the routes array

    console.log('Submitting payload:', payload);

    this.api.postData(url, payload).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.sec.showSuccess('Routes added successfully!');
      },
      error: (error) => {
        console.error('Error:', error);
        this.sec.showError('Failed to add routes. Please try again.');
      }
    });
  }
  }


