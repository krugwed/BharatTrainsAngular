import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  data = {
    source: '',
    destination: '',
    journeyDate: ''
  };
  stationList: string[] = [];
  searchResults: any[] = [];

  constructor(public api: ApiService, public utilities: UtlitiesService) {}

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(): void {
    console.log("Fetching stations...");
    this.api.getStations().subscribe({
      next: (res: any) => {
        console.log("Stations fetched:", res); // Debugging
        this.stationList = res;
      },
      error: (err: any) => {
        console.error('Failed to load stations', err);
      }
    });
  }

  searchTrains(): void {
    const searchRequest = {
      source: this.data.source,
      destination: this.data.destination,
      journeyDate: this.data.journeyDate
    };

    this.api.postData('train/search', searchRequest).subscribe({
      next: (res: any[]) => {
        this.searchResults = res;
      },
      error: (err) => {
        console.error('Failed to search trains', err);
        this.utilities.showError('Search failed. Please try again.');
      }
    });
  }

  bookTicket(train: any): void {
    const userId = this.utilities.getUserId(); // Replace with actual user ID
    const searchResponse = {
      trainId: train.trainId,
      trainName: train.trainName,
      source: train.source,
      destination: train.destination,
      path: train.path,
      arrivalTime: train.arrivalTime,
      departureTime: train.departureTime,
      journeyDate: train.journeyDate
    };

    if(userId){
      this.api.bookTicket(searchResponse, userId).subscribe({
        next: (res: any) => {
          console.log('Booking successful:', res);
          this.utilities.showSuccess('Booking successful!');
        },
        error: (err: any) => {
          console.error('Booking failed', err);
          this.utilities.showError('Booking failed. Please try again.');
        }
      });
    }
    
  }
}