import React, { FC } from 'react';
import Paper from "@material-ui/core/Paper"
import { useStyles } from './styles'
import { Typography } from '@material-ui/core';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const ProjectDependencyCard = ({ dependencies }: any) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRoot}>
      <Typography variant="h5" className={classes.title}>Project Dependencies</Typography>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {dependencies.map(({ dependencyId, dependenciesName }: any) => (
          <TreeItem key={dependencyId} nodeId={dependencyId} label={dependenciesName} />
        ))}
      </TreeView>
    </Paper>
  );
}

export default ProjectDependencyCard;




