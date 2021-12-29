import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DcuConfiguration from '../Components/Dcu Configuration.js';
import Make from '../Components/Make.js';
import Type from '../Components/Type.js';
import Status from '../Components/Status.js';
import Change from '../Components/Change.js';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
      
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Make" {...a11yProps(0)} />
          <Tab label="Type" {...a11yProps(1)} />
          <Tab label="Status" {...a11yProps(2)} />
          <Tab label="Change" {...a11yProps(3)} />
          <Tab label="DCU Configuration" {...a11yProps(4)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Make />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Type />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Status />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Change />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <DcuConfiguration />
       </TabPanel>
    </Box>
  );
}
 
