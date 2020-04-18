import React, { useState, useEffect } from 'react';
import BottomMenu from '../Components/BottomMenu';
import AnalysisCard from '../Components/AnalysisCard';
import { makeStyles } from '@material-ui/core/styles';
import agent from '../agent';

const useStyles = makeStyles(theme => ({
  background: {
    height: '100vh',
    width: '100vw',
    background: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'scroll',
    paddingBottom: 100,
  },
  title: {
    textAlign: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [analyzes, setAnalyzes] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await agent.Analyzes.all(0);
      setAnalyzes(result);
    })();
  }, []);

  //TODO: ADD empty analysis and loading
  return (
    <>
      <div className={classes.background}>
        <h3 className={classes.title}>Последние анализы</h3>
        {analyzes.map(analysis => (
          <AnalysisCard
            date={analysis.createdAt}
            key={analysis._id}
            id={analysis._id}
          />
        ))}
      </div>
      <BottomMenu />
    </>
  );
};

export default Home;