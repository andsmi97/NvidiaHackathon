import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
import { useStyles } from './styles'
import { Typography } from '@material-ui/core';

import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};


const PieCard = (props: any) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRoot}>
      <Typography variant="h5" className={classes.title}>Role Distribution</Typography>
      <Pie data={data} />
    </Paper>
  );
}

export default PieCard;




