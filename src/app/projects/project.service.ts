import { Project } from './project';

export class ProjectService {

  private projects: Project[] = [
    new Project('C-75-826023', 'PROAN', 240599),
    new Project('C-75-826123', 'Cargill Guatemala', 240577),
    new Project('C-75-826483', 'AVI-G', 240588),
  ];

  getProjects() {
    return this.projects;
  }
}
