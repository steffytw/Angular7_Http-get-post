import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor( private http:Http) { }
  storeServers(servers:any[]){
    // return this.http.post("https://angular-study-d175d.firebaseio.com/data.json",servers)
    return this.http.put("https://angular-study-d175d.firebaseio.com/data.json",servers)

  }
  getServers(){
    return this.http.get("https://angular-study-d175d.firebaseio.com/data.json")
    .pipe(map((response:Response)=>{
      const data= response.json();
      return data;
    }
   ))
  }
}
