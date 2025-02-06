import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user: any = {};
  success: string | null = null;
  error: string | null = null;
  router: any;

  constructor(public api:ApiService,
    public sec:UtlitiesService,
){

}

  ngOnInit(): void {
    // Fetch user data from the service or API
    const url = "auth/users";
    const userId = this.sec.getUserId(); // Retrieve userId from UtilitiesService

    if (userId) {
      this.api.getUserData(url, userId).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('Error fetching user data:', error);
          this.error = 'Failed to load user data.';
        }
      );
    } else {
      this.error = 'User ID is not available.';
    }

  }

  updateProfile(): void {
    const url = "auth/users";
    const userId = this.sec.getUserId();
    const fullUrl = `${this.api.apiBase}${url}/${userId}`;
    

    const payload = {

      "username":this.user.username,
      "email":this.user.email,
      "address":this.user.address,
      "phoneno":this.user.phoneno,
      "role":this.user.role
    }
    console.log('in update profile method');
    this.api.putData(fullUrl, payload).subscribe(
      (response) => {
        this.success = 'Profile updated successfully!';
      },
      (error) => {
        console.error('Error updating profile:', error);
        this.error = 'Failed to update profile.';
      }
    );
  }
}
