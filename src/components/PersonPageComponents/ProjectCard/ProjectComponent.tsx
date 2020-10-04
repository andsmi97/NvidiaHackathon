import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

const ProjectComponent: FC<any> = (props: any) => {
  return <div>
    <Typography variant="h6">{props.projectName}</Typography>
    <Typography variant="body1">{props.projectShortDescription}</Typography>
    <Typography variant="body1">{props.projectImage}</Typography>
  </div>
}
export default ProjectComponent