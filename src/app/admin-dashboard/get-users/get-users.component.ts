import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent {
  users: any=[];
  
  

constructor(public api:ApiService,
            public sec:UtlitiesService,
){

}

 submit(){

  let url="auth/users";

  this.api.getData(url).subscribe((res:any)=>{
    this.users = res;
  });
 
}
}
