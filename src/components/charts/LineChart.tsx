"use client"

import React, { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
    totalAmount: number;
    year: number;
    month: number;
}

interface ChartWithCustomAxisColorsProps {
    data: DataPoint[];
}

const getMonthName = (month: number): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month - 1];
};

const ChartWithCustomAxisColors: FC<ChartWithCustomAxisColorsProps> = ({ data }) => {
    const formattedData = data.map((item) => ({
        ...item,
        name: getMonthName(item.month)
    }));

    return (
        <ResponsiveContainer width="100%" height="80%" style={{ position: "relative", left: "-20px" }}>
            <LineChart data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" stroke='#555555' />
                <XAxis
                    dataKey="name"
                    stroke="var(--primary-color)"  // Custom x-axis color (pink)
                    tick={{ fill: 'var(--primary-color)' }}  // Tick marks color
                    label={{ position: "outsidebottom", fill: 'var(--primary-color)' }}
                    fontSize="10px"
                />
                <YAxis
                    stroke="var(--primary-color)"  // Custom y-axis color (blue)
                    tick={{ fill: 'var(--primary-color)' }}  // Tick marks color
                    label={{ angle: -90, position: 'insideLeft', fill: 'var(--primary-color)' }}
                    domain={[0, 600]}
                    fontSize="10px"
                />
                <Tooltip
                    formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Income']} />
                <Legend />
                <Line type="monotone" dataKey="totalAmount" name="Income per month" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartWithCustomAxisColors;