import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Anton, sans-serif',
    fontWeight: '700',
    margin: theme.spacing(3, 0, 2),
    textAlign: 'center',
    fontSize: '60px',
    color: '#716F81',
    letterSpacing: 2,
  },
}));

export const Header = () => {
  const styles = useStyles();

  return (
    <Typography className={styles.root} component="h1" variant="h5">
      Form Practice
    </Typography>
  );
};
