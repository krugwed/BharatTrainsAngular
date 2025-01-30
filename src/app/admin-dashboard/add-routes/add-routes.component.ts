import { Component } from '@angular/core';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.scss']
})
export class AddRoutesComponent {
  routes = [{ trainId: '', station: '', arrivalTime: '', departureTime: '', journeyDate: '' }];

  addRoute() {
    this.routes.push({ trainId: '', station: '', arrivalTime: '', departureTime: '', journeyDate: '' });
  }

  removeRoute(index: number) {
    this.routes.splice(index, 1);
  }

  onSubmit() {
    console.log(this.routes);
  }

}
