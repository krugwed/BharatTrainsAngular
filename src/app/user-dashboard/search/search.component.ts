import { Component } from "@angular/core";

interface SearchResponse {
  trainId: string;
  trainName: string;
  source: string;
  destination: string;
  path: string[];
  arrivalTime: string;
  departureTime: string;
  journeyDate: Date;
}

@Component({
  selector: 'app-train-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class TrainSearchComponent {
  fromStationId: string = '';
  toStationId: string = '';
  dateOfTravel: string = '';
  stationList = [
    { stationID: 'STA', stationName: 'Station A' },
    { stationID: 'STB', stationName: 'Station B' },
    // Add more stations as needed
  ];
  searchResults: SearchResponse[] = [];

  searchTrains() {
    // Mock search response
    this.searchResults = [
      {
        trainId: '12345',
        trainName: 'Express Train',
        source: 'Station A',
        destination: 'Station B',
        path: ['Station A', 'Station C', 'Station B'],
        arrivalTime: '10:00 AM',
        departureTime: '10:30 AM',
        journeyDate: new Date(this.dateOfTravel)
      },
      {
        trainId: '67890',
        trainName: 'Superfast Train',
        source: 'Station A',
        destination: 'Station D',
        path: ['Station A', 'Station E', 'Station D'],
        arrivalTime: '11:00 AM',
        departureTime: '11:30 AM',
        journeyDate: new Date(this.dateOfTravel)
      }
    ];
  }
}