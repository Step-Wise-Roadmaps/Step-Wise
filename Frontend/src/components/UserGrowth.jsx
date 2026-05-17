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

import { useSelector } from 'react-redux';

function UserGrowth() {

    const { userGrowth, isLoading } = useSelector(
        (state) => state.admin
    );

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    console.log(userGrowth);

    return (
        <div className="w-full min-h-[400px]">

            <ResponsiveContainer width="100%" height={400}>

                <LineChart data={userGrowth}>

                    <CartesianGrid strokeDasharray="5 5" />

                    <XAxis dataKey="date" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="Photoshop"
                        stroke="#8884d8"
                    />

                    <Line
                        type="monotone"
                        dataKey="Web Development"
                        stroke="#7c3aed"
                    />

                    <Line
                        type="monotone"
                        dataKey="UI/UX Design"
                        stroke="#2c3de3"
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}

export default UserGrowth;