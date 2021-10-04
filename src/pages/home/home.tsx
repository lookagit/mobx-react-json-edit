import { CircularProgress, CssBaseline } from '@mui/material';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@mui/styles';
import * as React from 'react';
import { Appbar } from '../../components/appbar/appbar';
import { Routes } from '../../pages/routes/routes';
import { StyledComponentProps } from '../../types/styled';

import { Classes, styles } from './styles';

/**
 * Home component, which basically to be shown always!
 */
class Home extends React.Component<any> {

  /** Renders home component */
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <CssBaseline />
        <Appbar />
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <React.Suspense fallback={<CircularProgress className={classes.pageLoading} />}>
            <div className={classes.innerWrapper}>
              <Routes />
            </div>
          </React.Suspense>
        </main>
      </div>
    );
  }
}

const StyledHome = withStyles(styles)(Home);

export { StyledHome as Home };
