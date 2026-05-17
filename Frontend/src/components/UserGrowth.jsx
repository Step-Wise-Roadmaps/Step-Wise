'use client';

import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { userGrowth } from '../features/auth/adminDashboardSlice';

function UserGrowth() {

    const dispatch = useDispatch();

    const { userGrowth: growthData, isLoading } = useSelector(
        (state) => state.admin
    );

    useEffect(() => {
        dispatch(userGrowth());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="w-full min-h-[400px]">

            <ResponsiveContainer width="100%" height={400}>

                <LineChart data={growthData}>

                    <CartesianGrid strokeDasharray="5 5" />

                    <XAxis dataKey="date" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="Photoshop"
                        stroke="#8884d8"
                        stackId="1"
                    />

                    <Line
                        type="monotone"
                        dataKey="Web Development"
                        stroke="#7c3aed"
                        stackId="1"
                    />

                    <Line
                        type="monotone"
                        dataKey="UI/UX Design"
                        stroke="#2c3de3"
                        stackId="1"
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}

export default UserGrowth;