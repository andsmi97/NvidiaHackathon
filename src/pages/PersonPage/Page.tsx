import React, { FC } from "react";
// import Paper from "@material-ui/core/Paper";
// import { useStyles } from "./styles";
import TopBar from '../../components/TopBar/Component'
import PersonCard from "../../components/PersonPageComponents/PersonCard/Component";
import SkillCard from "../../components/PersonPageComponents/SkillsCard/Component";
import Grid from '@material-ui/core/Grid'
export interface IPersonPageProps {
  authInProgress?: any;
  onGoogleSignIn?: any;
}


const PersonPage: FC<IPersonPageProps> = () => {
  // const classes = useStyles();

  const person = {
    "personId": 1,
    "personName": "Piper Dingledine",
    "personEmail": "Piper.Dingledine@fakegame.com",
    "personAvatar": "https://sun1-23.userapi.com/c854120/v854120553/170767/TT4xpasHrwU.jpg",
    "reportsTo": [7],
    "projects": [
      {
        "projectId": 1,
        "name": "Fake mobile game"
      }
    ],
    "personRole": [
      {
        "roleId": 1,
        "roleName": "Sales",
        "projectId": 1,
        "projectName": "Fake mobile game"
      },
      {
        "roleId": 2,
        "roleName": "Manager",
        "projectId": 2,
        "projectName": "Fake mobile dragon game"
      }
    ],
    "personSkills": [
      {
        "skillId": 1,
        "skillName": "Sales tactic",
        "skillIcon": "url_to_image"
      },
      {
        "skillId": 2,
        "skillName": "Storytelling",
        "skillIcon": "url_to_image"
      },
      {
        "skillId": 3,
        "skillName": "Relation building",
        "skillIcon": "url_to_image"
      }
    ]
  } as unknown as any;

  return (<>
    <TopBar pageName={"Personal Page"} />
    <Grid container>

      <Grid item><PersonCard {...person} /></Grid>
      <Grid item><SkillCard personSkills={person.personSkills} />
      </Grid>

    </Grid>

  </>
  );
};

export default PersonPage;
