import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
import { useStyles } from './styles'
import { ISkill } from '../../../types'
import { Chip, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

export interface IProjectCard {
  // projects: IProject[];
}

const ProjectCard: FC<any> = ({ projects }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRoot} >
      <Typography variant="h5" className={classes.title}>Projects</Typography>
      {projects.map((project: any) => (
        <Link className={classes.projectWrapper} to={'/project'} >
          <div className={classes.leftPadding}>
            <Typography variant="h6">{project.projectName}</Typography>
            <Typography variant="body2">{project.projectShortDescription}</Typography>
          </div>
          <img className={classes.image} src={project.projectImage} />
        </Link>
      ))}
    </Paper>
  );
}
export default ProjectCard 