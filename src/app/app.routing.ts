import {RouterModule, Routes} from "@angular/router";

import {ProjectsComponent} from "./projects/projects.component";
import {MachinesComponent} from "./machines/machines.component";

const APP_ROUTES: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'machines', component: MachinesComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
