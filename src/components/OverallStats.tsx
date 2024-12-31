import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { DirectionsRun, AccessTime, Terrain, ShowChart } from '@mui/icons-material';

type Stat = {
    label: string;
    value: number | string;
    icon: JSX.Element;
};

const stats: Stat[] = [
    { label: 'Activities', value: 250, icon: <DirectionsRun /> },
    { label: 'Distance (km)', value: 560, icon: <ShowChart /> },
    { label: 'Time (hrs)', value: 80, icon: <AccessTime /> },
    { label: 'Elevation (m)', value: 3200, icon: <Terrain /> },
];

const OverallStats: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {stats.map((stat) => (
                <Grid item xs={12} sm={6} md={3} key={stat.label}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" color="primary" gutterBottom>
                                {stat.icon}
                            </Typography>
                            <Typography variant="h6">{stat.value}</Typography>
                            <Typography color="textSecondary">{stat.label}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default OverallStats;
