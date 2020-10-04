export interface IEmployee {
  personId: number;
  personName: string;
  personEmail: string;
  reportsTo: number;
  projectName: string;
  personRole: string;
  personSkills: string[];
}

export interface ISkill {
  skillId: number;
  skillName: string;
  skillIcon: string;
}

export interface IRole {
  roleId: number;
  roleName: string;
}

export interface IGanttRow {
  rowTitle: string;
  rowSteps: string[];
}
export interface IGantt {
  ganttId: number;
  ganttName: string;
  gantRows: IGanttRow[];
}
export interface IProject {
  projectId: number;
  projectName: string;
  projectDescription: string;
  gantt: IGantt;
  dependencies: IProject;
  persons: IPerson[];
}

export interface IPerson {
  personId: number;
  personName: string;
  personEmail: string;
  personAvatar: string;
  reportsTo: number[];
  projects: {
    projectId: number;
    projectName: string;
  };
  roles: IRole[];
  personSkills: ISkill[];
}
