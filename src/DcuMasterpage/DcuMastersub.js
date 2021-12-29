import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownClass() {
  const [phase, setMeter] = React.useState('');
  const handleChange = (event) => {
    setMeter(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter the value</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={phase}
          label="Enter the value"
          onChange={handleChange}
        >
          <MenuItem value={10}>Dcu Installed</MenuItem>
          <MenuItem value={20}>Dcu Stores</MenuItem>
          <MenuItem value={30}>Dcu Retired</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}