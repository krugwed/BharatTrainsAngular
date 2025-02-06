import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  success: string | null = null;
  error: string | null = null;

  constructor(private api: ApiService, private sec: UtlitiesService, private router: Router) {}

  deleteUser(): void {
    const url = "auth/users";
    const userId = this.sec.getUserId();

    if (userId) {
      this.api.deleteUser(url, userId).subscribe(
        (response) => {
          this.success = 'User deleted successfully!';
          this.router.navigate(['/login']); // Redirect to login or another page
        },
        (error) => {
          console.error('Error deleting user:', error);
          this.error = 'Failed to delete user.';
        }
      );
    } else {
      this.error = 'User ID is not available.';
    }
  }
}
