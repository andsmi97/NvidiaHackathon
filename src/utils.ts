import { employee } from "./types";

export const findBySkills = (
  employees: employee[],
  skills: string
): employee[] => {
  return employees.reduce((acc: employee[], employee: employee) => {
    if (employee.personSkills.includes(skills)) {
      acc = [...acc, employee];
    }
    return acc;
  }, []);
};
