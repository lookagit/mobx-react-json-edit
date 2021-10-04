import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { StyledComponentProps } from '../../types/styled';
import SvgIcon from '@mui/material/SvgIcon';

import { Classes, styles } from './styles';
import { Link } from 'react-router-dom';

const Appbar: React.FunctionComponent<AppbarProps> = ((props: AppbarProps): JSX.Element => {
  
  const { classes } = props;

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar
        className={classes.toolbar}
        disableGutters={false}
      >
        <Link to="/">
          <SvgIcon>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        </Link>
        <div style={{ marginLeft: '10px' }}>
          <Typography className={classes.toolbarLeft} variant="h4" color="inherit">
            <span style={{ fontSize: '25px' }}>APPLICATION 4 CREATE</span>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
});

interface InjectedProps {
}

interface AppbarProps extends StyledComponentProps<Classes>, Partial<InjectedProps> {
}

const StyledAppbar = withStyles(styles)(Appbar);

export { StyledAppbar as Appbar };
