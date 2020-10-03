import { IEmployee, IPerson, IProject, IRole, ISkill } from "./types";

export const findBySkills = (
  employees: IEmployee[],
  skills: string
): IEmployee[] => {
  return employees.reduce((acc: IEmployee[], employee: IEmployee) => {
    if (employee.personSkills.includes(skills)) {
      acc = [...acc, employee];
    }
    return acc;
  }, []);
};

const getFirstLetters = (s: string): string => {
  const acronym = s
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");

  return acronym.toUpperCase();
};

export const getSkills = (empployees: IEmployee[]): ISkill[] => {
  let totalSkills = empployees.reduce((acc: string[], employee: IEmployee) => {
    let skills = employee.personSkills;
    skills.forEach((skill) => {
      if (!acc.includes(skill)) {
        acc = [...acc, skill];
      }
    });
    return acc;
  }, []);

  return totalSkills.map((skill: string, index: number) => {
    return {
      skillId: index + 1,
      skillName: skill,
      skillIcon: getFirstLetters(skill),
    };
  });
};

export const getRoles = (employees: IEmployee[]): IRole[] => {
  const roles = employees.reduce((acc: string[], employee: IEmployee) => {
    if (!acc.includes(employee.personRole)) {
      acc = [...acc, employee.personRole];
    }
    return acc;
  }, []);
  return roles.map((roleName, roleIndex) => ({
    roleId: roleIndex + 1,
    roleName,
  }));
};

export const RolesPerProject = (project: IProject): any => {
  let rolesAmount = project.persons.reduce((acc: any, person: IPerson) => {
    person.roles.forEach((role) => {
      if (!(role.roleName in acc)) {
        acc[role.roleName] = 1;
      } else {
        acc[role.roleName] += 1;
      }
    });
    return acc;
  }, {});

  return {
    roles: Object.keys(rolesAmount),
    amount: Object.values(rolesAmount),
  };
};
