import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import Filters from './components/Filter';
import MapComponent from './components/Map';
import ChartComponent from './components/Charts';
import { fetchTripData } from './services/ApiServices';

const App = () => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    const loadTrips = async () => {
      const data = await fetchTripData();
      setTrips(data);
      setFilteredTrips(data);
    };
    loadTrips();
  }, []);

  const handleFilter = (filters) => {
    const { timeRange, fareRange, distanceRange, paymentType } = filters;

    const filtered = trips.filter((trip) => {
      const pickupTime = new Date(trip.pickup_datetime).getHours();
      const fare = parseFloat(trip.fare_amount || 0);
      const distance = parseFloat(trip.trip_distance || 0);

      const matchTime = pickupTime >= timeRange[0] && pickupTime <= timeRange[1];
      const matchFare = fare >= fareRange[0] && fare <= fareRange[1];
      const matchDistance = distance >= distanceRange[0] && distance <= distanceRange[1];
      const matchPayment =
        paymentType === 'All' || trip.payment_type === paymentType;

      return matchTime && matchFare && matchDistance && matchPayment;
    });

    setFilteredTrips(filtered);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" sx={{ my: 3 }}>
        NYC Taxi Trips Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Filters onFilter={handleFilter} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <MapComponent trips={filteredTrips} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ChartComponent trips={filteredTrips} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
