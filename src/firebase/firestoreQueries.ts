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
  getSimilarPersons: async (personId: number): Promise<any> => {
    const person: any = await (
      await persons.where("personId", "==", personId).get()
    ).docs.reduce((acc, doc) => {
      const data: any = doc.data();
      acc = data;
      return acc;
    }, {});
    const personSkills = person.personSkills;
    let similarPersons: any = [];
    for await (let skill of personSkills) {
      const similarPersonsForSkill = await (
        await persons.where("personSkills", "array-contains", skill).get()
      ).docs.map((doc) => {
        const data: any = doc.data();
        return data;
      }, {});
      similarPersons = [...similarPersons, ...similarPersonsForSkill];
    }

    const filteredDuplicates = similarPersons.reduce(
      (acc: any, similarPersons: any) => {
        const x = acc.find(
          (item: any) => item.personId === similarPersons.personId
        );
        if (!x) {
          return acc.concat([similarPersons]);
        } else {
          return acc;
        }
      },
      []
    );

    return filteredDuplicates.filter(
      (person: any) => person.personId !== personId
    );
  },
  //   const getOnePerson = stringId => {
  //     return firestore().collection('persons').where('personId', '==', stringId).get()
  // }
  // const getProjectsFromId = stringId =>{
  //   return firestore().collection('persons').where('PersonId', '==', stringId).get()
  // }
  getOne: async (personId: number): Promise<any> => {
    return await (
      await persons.where("personId", "==", personId).get()
    ).docs.reduce((acc, doc) => {
      const data: any = doc.data();
      acc = data;
      return acc;
    }, {});
  },

  getProjectsFromId: async (personId: number): Promise<any> => {
    const person: any = await (
      await persons.where("personId", "==", personId).get()
    ).docs.reduce((acc, doc) => {
      const data: any = doc.data();
      acc = data;
      return acc;
    }, {});
    const personProjects = person.projects;
    let personListProjects: any = [];
    for await (let project of personProjects) {
      const projectId = project.projectId;
      const personFullProject = await (
        await projects.where("projectId", "==", projectId).get()
      ).docs.reduce((acc, doc) => {
        const data: any = doc.data();
        acc = data;
        return acc;
      }, {});
      personListProjects = [...personListProjects, personFullProject];
    }
    return personListProjects;
  },

  getColleagues: async (personId: number): Promise<any> => {
    const person: any = await (
      await persons.where("personId", "==", personId).get()
    ).docs.reduce((acc, doc) => {
      const data: any = doc.data();
      acc = data;
      return acc;
    }, {});
    const personProjects = person.projects;
    let personListColleagues: any = [];
    for await (let project of personProjects) {
      const projectId = project.projectId;
      const personProjectColleagues = await (
        await projects.where("projectId", "==", projectId).get()
      ).docs.reduce((acc: any, doc) => {
        const data: any = doc.data();
        //acc = data.person;
        acc = [...acc, ...data.person];
      }, []);

      personListColleagues = [
        ...personListColleagues,
        ...personProjectColleagues,
      ];
    }
    // return personListColleagues;

    const filteredDuplicatesPersons = personListColleagues.reduce(
      (acc: any, similarColleagues: any) => {
        const x = acc.find(
          (item: any) => item.personId === personListColleagues.personId
        );
        if (!x) {
          return acc.concat([similarColleagues]);
        } else {
          return acc;
        }
      },
      []
    );

    return filteredDuplicatesPersons.filter(
      (person: any) => person.personId !== personId
    );
  },

  findBySearch: async(stringQuery: string):Promise<any> =>{
    const projects: any = await (await projects.dependencies.where("dependenciesName", "==", stringQuery).get()).docs.reduce((acc, doc) => {
      const data: any = doc.data();
      acc = data;
      return acc;
    }, {});
    const persons: any = await (await persons.skills("skill"))
  }
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
