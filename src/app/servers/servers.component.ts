import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
/*  template: `*/
/*    <app-server></app-server>*/
/*    <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'No name for now';

  /*Initializing method from the export class*/
  constructor() {
    setTimeout(() => {this.allowNewServer = true; }, 2000 );
  }

  ngOnInit(): void {
  }

  /* Function to update the status of serverCreationStatus */
  // tslint:disable-next-line:typedef
  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }

  /*Function to capture the server name from an input*/
  // tslint:disable-next-line:typedef
  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
