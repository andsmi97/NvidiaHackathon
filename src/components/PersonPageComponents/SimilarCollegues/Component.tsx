import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
import { useStyles } from './styles'
import { Chip, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider"

const SimilarColleguesCard: FC<any> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRoot} >
      <Typography variant="h5" className={classes.title}>Similar Collegues</Typography>
      <List className={classes.root}>
        {props.collegues.map((collegue: any) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={collegue.personAvatar} />
              </ListItemAvatar>
              <ListItemText primary={collegue.personName} secondary={collegue.personRole[0].roleName} />
            </ListItem>
            <Divider variant="middle" />
          </>
        ))}
      </List>
    </Paper >
  );
}
export default SimilarColleguesCard


