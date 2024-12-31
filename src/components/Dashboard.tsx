import React from 'react';
import { fetchSportsData, SportsData } from '../services/api';
import ChartDisplay from './ChartDisplay';
import { useQuery } from '@tanstack/react-query';

const Dashboard: React.FC = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['sportsData'],
        queryFn: fetchSportsData,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;

    return (
        <div className="container">
            <h1>Sports Club Dashboard</h1>
            <div className="row">
                {data?.map((item: SportsData) => (
                    item.mvpActivities && (
                    <div key={item.id} className="col-md-4">
                        <div className="card">
                            <h5 className="card-title">
                                {item.weekNo} Performance: {item.mvpActivities}
                            </h5>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <ChartDisplay data={data || []} />
        </div>
    );
};

export default Dashboard;
