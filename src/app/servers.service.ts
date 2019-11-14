import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


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
  }
}
