import React, { useEffect, FC, Suspense } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch } from "react-router-dom";
import Router from "./Router";
import Loader from "./components/Loader/Component";
// import agent from './agent';
import Snack, { VariantIcon } from "./components/Snack/Component";
import { auth, createUserProfileDocument } from "./firebase/utils";
// import { getSkills, getRoles } from "./utils";
// import emp from "./emp.json";
// import { Person } from "@material-ui/icons";
// import Query from "./firebase/firestoreQueries";
// import newdata from "./newdata.json";
interface AppProps {
  user: {};
  isLoading: boolean;
  snackStatus: boolean;
  snackMessage: string;
  snackType: keyof VariantIcon;
  onLoad(payload: any, token: any): void;
  handleCloseSnackBar(e: any): void;
  setCurrentUser(user: any): void;
}

const App: FC<AppProps> = ({
  user,
  isLoading,
  snackStatus,
  snackMessage,
  snackType,
  onLoad,
  setCurrentUser,
  handleCloseSnackBar,
}) => {
  // (async () => {
  //   const similarPerson = await Query.Persons.getSimilarPersons(5)
  //   console.log(similarPerson)
  // })()
  // console.log(getRoles(emp));
  // const uploadData = (e: any): any => {
  //   newdata.persons.forEach((person) => {
  //     Query.Persons.create(person);
  //   });
  //   newdata.projects.forEach((project) => {
  //     Query.Projects.create(project);
  //   });
  //   newdata.roles.forEach((role) => {
  //     Query.Roles.create(role);
  //   });
  //   newdata.skills.forEach((skill) => {
  //     Query.Skills.create(skill);
  //   });
  // };
  // const receiveData = async (e: any): Promise<any> => {
  //   const data1 = await Query.Persons.getall();
  //   const data2 = await Query.Projects.getall();
  //   const data3 = await Query.Skills.getall();
  //   const data4 = await Query.Roles.getall();
  //   console.log({
  //     ...data1,
  //     ...data2,
  //     ...data3,
  //     ...data4
  //   })
  //   console.log(data1);

  // };
  // const receiveData2 = async (e: any): Promise<any> => {
  //   console.log(data2);
  // };
  // const receiveData3 = async (e: any): Promise<any> => {
  //   console.log(data3);
  // };
  // const receiveData4 = async (e: any): Promise<any> => {
  //   console.log(data4);
  // };

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const token = await userAuth.getIdToken();
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef === undefined) {
          setCurrentUser(userAuth);
        } else {
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
              token,
              photoURL: userAuth.photoURL,
            });
          });
        }
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);
  return (
    <Suspense fallback={Loader}>
      <CssBaseline />
      <Switch>{isLoading ? <Loader /> : <Router />}</Switch>
      {/* <div onClick={uploadData}>UploadData</div>
      <div onClick={receiveData}>getData</div> */}
      {/* <div onClick={receiveData2}>getData about Projects</div>
      <div onClick={receiveData3}>getData about Roles</div>
      <div onClick={receiveData4}>getData about Skills</div> */}
      <Snack
        open={snackStatus}
        variant={snackType}
        message={snackMessage}
        onClose={handleCloseSnackBar}
      />
    </Suspense>
  );
};

export default App;
