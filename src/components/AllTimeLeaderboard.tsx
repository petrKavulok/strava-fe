import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid2 } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';

interface User {
    name: string;
    distance: number;
    avatar: string;
}

const topUsers: User[] = [
    { name: 'Alice', distance: 1000, avatar: '/path-to-avatar1.jpg' },
    { name: 'Bob', distance: 800, avatar: '/path-to-avatar2.jpg' },
    { name: 'Charlie', distance: 700, avatar: '/path-to-avatar3.jpg' },
];

const AllTimeLeaderboard: React.FC = () => {
    return (
        <Grid2 container spacing={2} sx={{ mt: 4 }}>
            {topUsers.map((user, index) => (
                // <Grid2 item xs={12} sm={4} key={user.name}>
                <Card
                    sx={{ textAlign: 'center', py: 2, border: index === 0 ? '2px solid gold' : '' }}
                >
                    <Avatar src={user.avatar} sx={{ width: 56, height: 56, mx: 'auto', mb: 1 }} />
                    <CardContent>
                        <Typography variant="h6">{user.name}</Typography>
                        <Typography color="textSecondary">Distance: {user.distance} km</Typography>
                    </CardContent>
                    {index === 0 && <EmojiEvents color="primary" sx={{ fontSize: 40 }} />}
                </Card>
                // </Grid2>
            ))}
        </Grid2>
    );
};

export default AllTimeLeaderboard;
