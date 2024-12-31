import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';

interface MVP {
    name: string;
    distance: number;
    time: string;
    elevation: number;
    avatar: string;
}

const mvp: MVP = {
    name: 'Alice Johnson',
    distance: 50,
    time: '5 hrs',
    elevation: 400,
    avatar: '/path-to-avatar.jpg', // Replace with the actual path
};

const MVPLeaderboard: React.FC = () => {
    return (
        <Card sx={{ mt: 4, display: 'flex', alignItems: 'center', p: 2 }}>
            <Avatar alt={mvp.name} src={mvp.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {mvp.name}
                </Typography>
                <Typography variant="body1">Distance: {mvp.distance} km</Typography>
                <Typography variant="body1">Time: {mvp.time}</Typography>
                <Typography variant="body1">Elevation Gain: {mvp.elevation} m</Typography>
            </CardContent>
            <EmojiEvents color="primary" sx={{ fontSize: 40, ml: 'auto' }} />
        </Card>
    );
};

export default MVPLeaderboard;
