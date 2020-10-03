import { IPerson, IProject, IRole, ISkill } from "../types";
//EXAMPLE OF CRUD OPERATION

import { db } from "./utils";

export let currentUser = null;
export let languageCollection = undefined;
// const achievments = db.collection("achievments");
const persons = db.collection("persons");
const skills = db.collection("skills");
const roles = db.collection("roles");
const projects = db.collection("projects");
//**FIREBASE  REQUEST TEMPLATE */

const Persons = {
  create: async (person: any) => {
    const docRef = await persons.add({
      ...person,
      date: new Date(),
    });
    const result: IPerson = {
      id: docRef.id,
      ...person,
    } as IPerson;
    return result;
  },
  getall: async () => {
    return await (await persons.get()).docs.map((doc) => {
      //console.log(doc);
      const data: any = doc.data();
      // console.log(data);
      return {
        ...data,
        id: doc.id,
      };
    });
  },
};

const Projects = {
  create: async (project: any) => {
    const docRef = await projects.add({
      ...project,
      date: new Date(),
    });
    const result: IProject = {
      id: docRef.id,
      ...project,
    } as IProject;
    return result;
  },
  getall: async () => {
    return await (await projects.get()).docs.map((doc) => {
      //console.log(doc);
      const data: any = doc.data();
      // console.log(data);
      return {
        ...data,
        id: doc.id,
      };
    });
  },
};

const Skills = {
  create: async (skill: any) => {
    const docRef = await skills.add({
      ...skill,
      date: new Date(),
    });
    const result: ISkill = {
      id: docRef.id,
      ...skill,
    } as ISkill;
    return result;
  },
  getall: async () => {
    return await (await skills.get()).docs.map((doc) => {
      //console.log(doc);
      const data: any = doc.data();
      // console.log(data);
      return {
        ...data,
        id: doc.id,
      };
    });
  },
};

const Roles = {
  create: async (role: any) => {
    const docRef = await roles.add({
      ...role,
      date: new Date(),
    });
    const result: IRole = {
      id: docRef.id,
      ...role,
    } as IRole;
    return result;
  },
  getall: async () => {
    return await (await roles.get()).docs.map((doc) => {
      //console.log(doc);
      const data: any = doc.data();
      // console.log(data);
      return {
        ...data,
        id: doc.id,
      };
    });
  },
};

// const Achievments = {
//   create: async (achievment: Partial<AchievmentCardProps>) => {
//     const docRef = await achievments.add({
//       ...achievment,
//       date: new Date(),
//     });
//     const result: AchievmentCardProps = {
//       id: docRef.id,
//       ...achievment,
//     } as AchievmentCardProps;
//     return result;
//   },
//   delete: async (id: string) => await achievments.doc(id).delete(),
//   update: async (achievment: Partial<AchievmentCardProps>) => {
//     await achievments.doc(achievment.id).update(achievment);
//   },
//   getOne: async (id: string) => await (await achievments.doc(id).get()).data(),
//   getAll: async () => {
//     return await (await achievments.orderBy("date", "desc").get()).docs.map(
//       (doc) => {
//         console.log(doc);
//         const data: AchievmentCardProps = doc.data() as AchievmentCardProps;
//         // console.log(data);
//         return {
//           ...data,
//           id: doc.id,
//         } as AchievmentCardProps;
//       }
//     );
//   },
// };

export default {
  setCurrentUser: (_currentUser: any): void => {
    currentUser = _currentUser;
  },
  setLanguageCollection: (_language: any): void => {
    languageCollection = _language;
  },
  Persons,
  Projects,
  Skills,
  Roles,
};
