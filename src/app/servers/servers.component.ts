import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
/*  template: `*/
/*    <app-server></app-server>*/
/*    <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  /*styleUrls: ['./servers.component.css']*/
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  isText = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'No name for now';
  serverStatus = 'offline';
  servers = ['TestServer 1', 'TestServer 2', 'TestServer 3', 'TestServer 4']

  /*Initializing method from the export class*/
  constructor() {
    setTimeout(() => {this.allowNewServer = true; }, 2000 );
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  /* Function to update the status of serverCreationStatus */
  // tslint:disable-next-line:typedef
  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.isText = true;
  }

  // tslint:disable-next-line:typedef
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
