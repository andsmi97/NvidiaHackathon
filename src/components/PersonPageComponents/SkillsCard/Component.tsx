import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
import { useStyles } from './styles'
import { ISkill } from '../../../types'
import { Chip, Typography } from '@material-ui/core';

export interface ISkillCard {
  personSkills: ISkill[];
}

const SkillCard: FC<ISkillCard> = ({ personSkills }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRoot} >
      <Typography variant="h5" className={classes.title}>Skills</Typography>
      {personSkills.map(skill => (
        <Chip clickable label={skill.skillName} className={classes.chip} variant="outlined" />
      ))}
    </Paper>
  );
}
export default SkillCard 