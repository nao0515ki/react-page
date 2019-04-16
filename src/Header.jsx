import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import rubyLogo from './ruby_logo.svg';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            {/*<img src={rubyLogo} className="Ruby-logo" alt="logo" />*/}
          </Link>
          <Typography variant="h6" color="inherit" className={classes.toolbarTitle}>
            いしがき
          </Typography>
          {/*<Button>Features</Button>*/}
          {/*<Button>Enterprise</Button>*/}
          {/*<Button>Support</Button>*/}
          {/*<Button color="primary" variant="outlined">*/}
          {/*  Login*/}
          {/*</Button>*/}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
