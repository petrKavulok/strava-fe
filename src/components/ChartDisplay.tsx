import React from 'react';
import { Bar } from 'react-chartjs-2';
import { SportsData } from '../services/api';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    // ... other scales and elements you're using ...
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
    // ... register other scales and elements you're using ...
);

interface ChartDisplayProps {
    data: SportsData[];
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({ data }) => {
    const chartData = {
        labels: data.map((item) => item.distance),
        datasets: [
            {
                label: 'Performance',
                data: data.map((item) => item.distance),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>Performance Chart</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default ChartDisplay;
