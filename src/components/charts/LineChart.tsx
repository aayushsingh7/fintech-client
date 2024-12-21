"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', orders: 400 },
    { name: 'Feb', orders: 300 },
    { name: 'Mar', orders: 200 },
    { name: 'Apr', orders: 278 },
    { name: 'May', orders: 189 },
    { name: 'Jun', orders: 239 }
];

const ChartWithCustomAxisColors = () => {
    return (
        <ResponsiveContainer width="100%" height="80%" style={{ position: "relative", left: "-30px" }}>
            <LineChart data={data}>
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
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartWithCustomAxisColors;