import {RouterModule, Routes} from "@angular/router";

import {ProjectsComponent} from "./projects/projects.component";
import {MachinesComponent} from "./machines/machines.component";
import {ProjectComponent} from "./projects/project.component";

const APP_ROUTES: Routes = [
  {path: 'projects/test', component: ProjectComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'machines', component: MachinesComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
