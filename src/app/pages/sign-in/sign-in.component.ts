import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtlitiesService } from '../../services/utlities.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
data: any=[];
  
  

constructor(public api:ApiService,
            public sec:UtlitiesService,
            private router: Router
){

}

 submit(){

  let url="auth/users/login";
  const payload = {

    "username":this.data.username,
    "password":this.data.password
  }

  console.log(this.data.username)

  this.api.postData(url,payload).subscribe((res:any)=>{

        this.sec.jwtToken=res.jwt;
        this.sec.userType=res.role;

        // Redirect based on user role
      if (res.role === 'ADMIN') {
        console.log('in admin dashboard')
        this.router.navigate(['/admin-dashboard']);
      } else if (res.role === 'USER') {
        console.log('in user dashboard ')
        this.router.navigate(['/user-dashboard']);
      }

  });
 
}
}
