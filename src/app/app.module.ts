import { NgModule } from '@angular/core';
import { NgClass} from '@angular/common';
import { NgStyle} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import { HomeworkComponent } from './homework/homework.component';
import { Homew2Component } from './homew2/homew2.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TestComponentComponent,
    WarningAlertComponent,
    SuccesAlertComponent,
    HomeworkComponent,
    Homew2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
