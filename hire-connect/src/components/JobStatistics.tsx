import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Engineering', 'Marketing', 'Sales'],
  datasets: [
    {
      label: 'Job Openings',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const JobStatistics: React.FC = () => {
  return <Bar data={data} />;
};

export default JobStatistics;