import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'
import { IRole } from '../../../types'
import { Link } from 'react-router-dom';
export interface IPersonCard {
  personId: number;
  personName: string;
  personRole: IRole[];
  personAvatar: string;
  personEmail: string;
}

const PersonCard: FC<any> = ({ personId, personName, personRole, personAvatar, personEmail }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to="/person" >
        <CardMedia
          className={classes.media}
          image={personAvatar}
          title={`${personName} avatar`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
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
export default PersonCard 