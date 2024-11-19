import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartComponent = ({ trips }) => {
  const paymentData = trips.reduce(
    (acc, trip) => {
      acc[trip.payment_type] = (acc[trip.payment_type] || 0) + 1;
      return acc;
    },
    {}
  );

  const data = {
    labels: Object.keys(paymentData),
    datasets: [
      {
        label: 'Payment Type',
        data: Object.values(paymentData),
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Payment Insights
        </Typography>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
