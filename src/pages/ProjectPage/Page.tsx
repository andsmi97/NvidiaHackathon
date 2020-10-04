import React, { FC } from "react";
// import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import TopBar from '../../components/TopBar/Component'
import PersonCard from "../../components/ProjectPageComponents/PersonCard/Component";
import Grid from '@material-ui/core/Grid'
import { Container } from "@material-ui/core";
import ProjectCard from "../../components/ProjectPageComponents/ProjectCard/Component";
import Disqus from "../../components/Disqus/Component";
import PieCard from "../../components/ProjectPageComponents/PieChartCard/Component";
import GanttCard from "../../components/ProjectPageComponents/GanttChart/Component";
import ProjectDependenciesCard from "../../components/ProjectPageComponents/ProjectDependenciesCard/Component";
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
  const project = {
    "projectId": 5,
    "projectName": "Mafia mobile game",
    "projectDescription": "The goal of your project proposal is to describe the game you plan to create in enough detail to show how it will be played, how the game will be fun, how it will be novel, and what tools you will use to create it. It is particularly important that your game's novel aspect is clearly explained.",
    "projectShortDescription": "The goal of your project proposal is to describe the game you plan   to create in enough detail to show how it will be played.",
    "projectImage": "https://unsplash.com/photos/f5Ue0h_QQNI",
    "persons": [
      {
        "personId": 1,
        "personName": "Piper Dingledine",
        "personEmail": "Piper.Dingledine@fakegame.com",
        "personAvatar": "https://sun1-23.userapi.com/c854120/v854120553/170767/TT4xpasHrwU.jpg",
        "reportsTo": [7]
      },
      {
        "personId": 9,
        "personName": "Dennis Gist",
        "personEmail": "Dennis.Gist@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        "reportsTo": [15]
      },
      {
        "personId": 11,
        "personName": "Nancy Villanueva",
        "personEmail": "Nancy.Villanueva@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        "reportsTo": [15]
      },
      {
        "personId": 12,
        "personName": "Samuel Iaccarino",
        "personEmail": "Samuel.Iaccarino@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1552658165-7a51046b41f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "reportsTo": [14]
      },
      {
        "personId": 15,
        "personName": "Tanner Harrington",
        "personEmail": "Tanner.Harrington@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
        "reportsTo": [19]
      },
      {
        "personId": 16,
        "personName": "Norman Ruiz",
        "personEmail": "Norman.Ruiz@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1533618561606-3b2a0766d159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "reportsTo": [19]
      },
      {
        "personId": 17,
        "personName": "Phyllis Harris",
        "personEmail": "Phyllis.Harris@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1591727884968-cc11135a19b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=655&q=80",
        "reportsTo": [7]
      },
      {
        "personId": 18,
        "personName": "Kyle Nava",
        "personEmail": "Kyle.Nava@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1519744434498-a0de604df9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "reportsTo": [7]
      },
      {
        "personId": 19,
        "personName": "Jimmie Shah",
        "personEmail": "Jimmie.Shah@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1509933551745-514268e48884?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "reportsTo": [7]
      },
      {
        "personId": 20,
        "personName": "Jeffrey Gutierrez",
        "personEmail": "Jeffrey.Gutierrez@fakegame.com",
        "personAvatar": "https://images.unsplash.com/photo-1519266277740-7fdb3202f35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "reportsTo": [14]
      }
    ],
    "gantt": {
      "ganttName": "Project Timeline",
      "ganttRows": [
        {
          "rowTitle": "Design",
          "rowSteps": ["2012-04-23T18:25:43.511Z", "2012-05-23T18:25:43.511Z"]
        },
        {
          "rowTitle": "Programming",
          "rowSteps": ["2012-05-23T18:25:43.511Z", "2012-06-23T18:25:43.511Z"]
        }
      ]
    },
    "dependencies": [
      {
        "dependenciesId": 1,
        "dependenciesName": "Android"
      },
      {
        "dependenciesId": 10,
        "dependenciesName": "git"
      },
      {
        "dependenciesId": 4,
        "dependenciesName": "DS"
      }
    ]
  }
  const teamMates: any = project.persons.filter((item, index) => index < 6);
  return (<>
    <TopBar pageName={"Project Page"} />
    <Container>
      <Grid container spacing={2}>

        <Grid item spacing={2} sm={9} xs={12}>
          <div className={classes.bottomSpacing}></div>
          <ProjectCard project={project} />
          <div className={classes.bottomSpacing}></div>
        </Grid>

        <Grid item spacing={2} sm={3}>
          <div className={classes.bottomSpacing}></div>
          <PieCard />
        </Grid>
      </Grid>

      <Grid container spacing={2} justify="center">
        {teamMates.map((teamMate: any) => (
          <Grid key={teamMate.personId} item spacing={2} sm={2} xs={12}>
            <PersonCard {...teamMate} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        < Grid item spacing={2} sm={3} xs={12} >
          <div className={classes.bottomSpacing}></div>
          <ProjectDependenciesCard dependencies={project.dependencies} />
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
