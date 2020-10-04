import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
// import { useStyles } from './styles'
import { ISkill } from '../../../types'
import { Chip } from '@material-ui/core';

export interface ISkillCard {
  personSkills: ISkill[];
}

const SkillCard: FC<ISkillCard> = ({ personSkills }) => {
  // const classes = useStyles();
  console.log('i am rendred')
  return (
    <Paper>
      {personSkills.map(skill => (
        <Chip label={skill.skillName} variant="outlined" />
      ))}
    </Paper>
  );
}
export default SkillCard 