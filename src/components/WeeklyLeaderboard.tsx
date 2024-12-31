import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const leaderboardData = {
    labels: ['Alice', 'Bob', 'Charlie'],
    datasets: [
        {
            label: 'Distance (km)',
            data: [50, 40, 30],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        },
    ],
};

const WeeklyLeaderboard: React.FC = () => {
    return (
        <Paper sx={{ mt: 4, p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Weekly Leaderboard
            </Typography>
            <Bar data={leaderboardData} />
        </Paper>
    );
};

export default WeeklyLeaderboard;
