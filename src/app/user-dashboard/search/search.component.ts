import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtlitiesService } from 'src/app/services/utlities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  data: any=[];
stationList: any;
searchResults: any;
  
  

constructor(public api:ApiService,
            public sec:UtlitiesService,
            private router: Router
){

}

 searchTrains(){

  let url="auth/users/login";
  const payload = {

    "username":this.data.username,
    "password":this.data.password
  }

  console.log(this.data.username)

  this.api.postData(url,payload).subscribe((res:any)=>{

        
  });
 
}
}
