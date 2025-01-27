import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtlitiesService } from '../../services/utlities.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  data: any=[];
  

constructor(public api:ApiService,
            public sec:UtlitiesService
){

}

 submit(){

  let url="auth/users/register";
  const payload = {

    "username":this.data.username,
    "password":this.data.password,
    "email":this.data.email,
    "phoneno":this.data.phoneno,
    "address":this.data.address,
    "role": this.data.role
  }

  console.log(this.data.username)

  this.api.postData(url,payload).subscribe((res:any)=>{

        this.sec.jwtToken=res.jwt;
        this.sec.userType=res.role;

  });
 
}
}
