import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
import { useStyles } from './styles'
import { Typography } from '@material-ui/core';

export interface IProjectCard {
  // projects: IProject[];
}

const ProjectCard: FC<any> = ({ project }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRoot} >
      <img className={classes.image} src={project.projectImage} />
      <div className={classes.leftPadding}>
        <Typography variant="h5">{project.projectName}</Typography>
        <Typography variant="body2">{project.projectShortDescription}</Typography>
      </div>
    </Paper>
  );
}
export default ProjectCard 