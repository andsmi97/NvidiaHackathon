import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
import { useStyles } from './styles'
import { Typography } from '@material-ui/core';
import ReactGantt, { GanttRow } from 'react-gantt';

const GanttCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRoot} >
      <Typography variant="h5" className={classes.title}>Project State</Typography>
      <ReactGantt
        templates={{
          myTasks: {
            title: 'Project State',
            steps: [
              {
                name: 'Task Phase One',
                color: '#0099FF'
              }
            ]
          }
        }}
        leftBound={new Date(2020, 3, 1)}
        rightBound={new Date(2020, 6, 1)}
      >
        <GanttRow
          title="Design"
          templateName="myTasks"
          steps={[
            new Date(2020, 3, 1),
            new Date(2020, 4, 1),

          ]}
        />
        <GanttRow
          title="Programming"
          templateName="myTasks"
          steps={[
            new Date(2020, 4, 1),
            new Date(2020, 6, 1),
          ]}
        />
      </ReactGantt>
    </Paper>
  );

}

export default GanttCard

