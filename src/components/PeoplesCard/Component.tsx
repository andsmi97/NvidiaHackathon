import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'
import { IRole } from '../../types'

export interface IPersonCard {
  personName: string;
  personRole: IRole[];
  personAvatar: string;
  personEmail: string;
}

const PeoplesCard: FC<any> = ({ personAvatar, personName, personRole, personEmail }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={personAvatar}
          title={`${personName} avatar`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {personName}
          </Typography>
          <div className={classes.lowerPart}>
            <Typography variant="body2" color="textSecondary" component="p">
              {personRole[0].roleName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {personEmail}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default PeoplesCard 