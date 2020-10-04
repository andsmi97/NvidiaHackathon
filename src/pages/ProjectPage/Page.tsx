import React, { FC } from "react";
// import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import TopBar from '../../components/TopBar/Component'
import PersonCard from "../../components/PersonPageComponents/PersonCard/Component";
import SkillCard from "../../components/PersonPageComponents/SkillsCard/Component";
import Grid from '@material-ui/core/Grid'
import { Container } from "@material-ui/core";
import ProjectCard from "../../components/PersonPageComponents/ProjectCard/Component";
import ColleguesCard from "../../components/PersonPageComponents/ColleguesCard/Component";
import SimilarColleguesCard from '../../components/PersonPageComponents/SimilarCollegues/Component'
import Disqus from "../../components/Disqus/Component";
import PieCard from "../../components/ProjectPageComponents/PieChartCard/Component";
import GanttCard from "../../components/ProjectPageComponents/GanttChart/Component";
export interface IPersonPageProps {
  authInProgress?: any;
  onGoogleSignIn?: any;
}


const PersonPage: FC<IPersonPageProps> = () => {
  const classes = useStyles();

  const person = {
    "personId": 1,
    "personName": "Piper Dingledine",
    "personEmail": "Piper.Dingledine@fakegame.com",
    "personAvatar": "https://sun1-23.userapi.com/c854120/v854120553/170767/TT4xpasHrwU.jpg",
    "reportsTo": [7],
    "projects": [
      {
        "projectId": 1,
        "projectName": "Karma mobile game",
        "projectDescription": "Students will plan and build their own game using the project guide from the previous two lessons to guide their project. Working individually or in pairs, students will first decide on the type of game they'd like to build, taking as inspiration a set of sample games.",
        "projectShortDescription": "Plan and build your own game using the project guide. Decide on the type of game they'd like to build, taking as inspiration a set of sample games.",
        "projectImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
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
  const collegues: any = [{
    "personId": 2,
    "personName": "Dennis Cardenas",
    "personEmail": "Dennis.Cardenas@fakegame.com",
    "personAvatar": "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    "personRole": [
      {
        "roleId": 1,
        "roleName": "Sales",
        "projectId": 2,
        "projectName": "Prototype mobile game"
      }]
  },
  {
    "personId": 3,
    "personName": "William Mooney",
    "personEmail": "William.Mooney@fakegame.com",
    "personAvatar": "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "personRole": [
      {
        "roleId": 3,
        "roleName": "Programmer",
        "projectId": 3,
        "projectName": "Karma mobile game"
      }]
  }]
  return (<>
    <TopBar pageName={"Project Page"} />
    <Container>
      <Grid container spacing={2}>

        <Grid item spacing={2} sm={9} xs={12}>
          <div className={classes.bottomSpacing}></div>
          <PersonCard {...person} />
          <div className={classes.bottomSpacing}></div>
        </Grid>

        <Grid item spacing={2} sm={3}>
          <div className={classes.bottomSpacing}></div>
          <PieCard />
          <div className={classes.bottomSpacing}></div>
          <SkillCard personSkills={person.personSkills} />
        </Grid>

        <Grid item spacing={2} sm={3} xs={12}>
          <div className={classes.bottomSpacing}></div>
          <ColleguesCard collegues={collegues} />
        </Grid>

        <Grid item spacing={2} sm={9} xs={12}>
          <div className={classes.bottomSpacing}></div>
          <GanttCard />
        </Grid>


        <Grid item spacing={2} sm={12} xs={12}>
          <Disqus />
        </Grid>

      </Grid>
    </Container>
  </>
  );
};

export default PersonPage;
