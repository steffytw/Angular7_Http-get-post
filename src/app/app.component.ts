import { Component } from '@angular/core';
import { ServersService } from './servers.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication-app';
  servers=[{name:'Test server', capacity:10, id:this.generateId()},
          {name:'Live server', capacity:100, id:this.generateId()}];
  onAddServer(name:string){
    this.servers.push({name:name,capacity:50,id:this.generateId()})

  }
  private generateId(){
    return Math.round(Math.random()*1000);
  
  }
  constructor(private serversService:ServersService){}
  onSave(){
    this.serversService.storeServers(this.servers)
    .subscribe((response)=>console.log(response),
    (error)=>console.log(error))
  }
  onGet(){
    this.serversService.getServers()
    .subscribe((servers:any[])=>{
      console.log(servers);
    },
    (error)=>console.log(error))
  }
  
}
