import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  newPassword: string = '';
  success: string | null = null;
  error: string | null = null;

  constructor(private api: ApiService, private sec: UtlitiesService) {}

  changePassword(): void {
    const url = "auth/users";
    const userId = this.sec.getUserId();
    const fullUrl = `${url}/${userId}`;
    console.log(fullUrl);
    const payload = { "newPassword": this.newPassword };

    this.api.postData(fullUrl,payload).subscribe({

    });
    
  }
}
