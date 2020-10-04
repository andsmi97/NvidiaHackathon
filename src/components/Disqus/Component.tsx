import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography"
import { DiscussionEmbed } from 'disqus-react';
import { useStyles } from './styles';


const Disqus: FC<any> = ({ url, identifier, title }) => {
  const classes = useStyles();
  const disqusShortname = "nvidianetwork"

  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "article-id",
    title: "Title of Your Article"
  }

  return <Paper className={classes.paperRoot}>
    <Typography variant="h5" className={classes.title}>Reviews</Typography>
    <DiscussionEmbed
      shortname={disqusShortname}
      config={disqusConfig}

    /></Paper>
}
export default Disqus