import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
import { useStyles } from './styles'
import { ISkill } from '../../../types'
import { Chip, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from "@material-ui/core/Divider"

const ColleguesCard: FC<any> = (props) => {
  const classes = useStyles();
  console.log(props.collegues)
  return (
    <Paper className={classes.paperRoot} >
      <Typography variant="h5" className={classes.title}>Project Teammates</Typography>
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
export default ColleguesCard


