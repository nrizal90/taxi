import React, { useState } from 'react';
import {
  Typography,
  Slider,
  Box,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from '@mui/material';

const Filters = ({ onFilter }) => {
  const [timeRange, setTimeRange] = useState([0, 24]);
  const [fareRange, setFareRange] = useState([0, 100]);
  const [distanceRange, setDistanceRange] = useState([0, 50]);
  const [paymentType, setPaymentType] = useState('All');

  const handleFilterChange = () => {
    onFilter({ timeRange, fareRange, distanceRange, paymentType });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography>Time Range:</Typography>
        <Slider
          value={timeRange}
          onChange={(e, newValue) => setTimeRange(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={24}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography>Fare Range:</Typography>
        <Slider
          value={fareRange}
          onChange={(e, newValue) => setFareRange(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={100}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography>Distance Range:</Typography>
        <Slider
          value={distanceRange}
          onChange={(e, newValue) => setDistanceRange(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={50}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Payment Type</InputLabel>
          <Select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="CSH">Cash</MenuItem>
            <MenuItem value="CRD">Card</MenuItem>
            <MenuItem value="UNK">Unkown</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleFilterChange}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
