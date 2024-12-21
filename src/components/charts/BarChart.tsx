"use client"

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', orders: 50 },
    { name: 'Feb', orders: 150 },
    { name: 'Mar', orders: 275 },
    { name: 'Apr', orders: 432 },
    { name: 'May', orders: 50 },
    { name: 'Jun', orders: 10 }
];

const BarChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%" style={{ position: "relative", left: "-30px", marginTop: "30px" }}>
            <BarChart data={data} >
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
                <Legend />
                <Bar dataKey="orders" label={{ position: 'top', fontSize: "10px", fill: "var(--primary-color)" }} fill="#676767" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;