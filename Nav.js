







import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CreateSO from './Create SO';
import ManageSO from './ManageSO';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
        //   variant="centered"
          style={{ background: '#0b020d' }}
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Create SO" />
          <LinkTab label="Manage SO"  />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CreateSO/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ManageSO/>
      </TabPanel>
      
    </div>
  );
}























































{/*import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CreateSO from './Create SO';
import ManageSO from './ManageSO';
import React, { Component }  from 'react';

 
export default () => (
  <Tabs>
    <TabList>
      <Tab>CreateSO</Tab>
      <Tab>ManageSO</Tab>
    </TabList>
 
    <TabPanel>
    <CreateSO/>
    </TabPanel>
    <TabPanel>
      <ManageSO/>
    </TabPanel>
  </Tabs>
);  */}





{/*  import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/CreateSO'>
                <li>CreateSO</li>
                </Link>
                <Link style={navStyle}to='/ManageSO'>
                <li>ManageSO</li>
                </Link>
                
                </ul>
                
                
    
        </nav>
    );
}


export default Nav;
*/}
