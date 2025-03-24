import { Card, CardContent, Typography } from '@mui/material';

import { CardHeader } from '@mui/material';
import { SportsData } from '../services/api';

export const LastWeek = ({ item }: { item: SportsData }) => {
    const { weekNo, startDate, endDate, id, ...rest } = item;

    return (
        <Card>
            
            <CardHeader title={'Last Week'} subheader={`${startDate} - ${endDate}`} />
            <CardContent>
                {Object.entries(rest).map(([key, value]) => (
                    <Typography key={key} variant="body2" color="text.secondary">
                        <strong>{key}:</strong> {value}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
};
