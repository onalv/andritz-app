import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { MachinesComponent } from './machines/machines.component';
import {routing} from './app.routing';
import { ProjectComponent } from './projects/project.component';
import {ProjectService} from './projects/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MachinesComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
