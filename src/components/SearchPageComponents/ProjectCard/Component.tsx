import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'
import { IRole } from '../../../types'

export interface IProjectCard {
  personName: string;
  personRole: IRole[];
  personAvatar: string;
  personEmail: string;
}

const ProjectCard: FC<any> = ({ projectName, projectId, projectImage }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={projectImage}
          title={`${projectName} avatar`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {projectName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ProjectCard 