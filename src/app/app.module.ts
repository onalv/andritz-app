import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { MachinesComponent } from './machines/machines.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MachinesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
