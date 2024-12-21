"use client"

import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    {
        "name": "Monday",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Tuesday",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Wednesday",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Thursday",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Friday",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Saturday",
        "uv": 2390,
        // "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Sunday",
        "uv": 3490,
        // "pv": 4300,
        "amt": 2100
    }
]

const AreaChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="80%" style={{ position: "relative", left: "-30px" }}>
            <AreaChart data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
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
                <CartesianGrid strokeDasharray="7 7" stroke='#555555' />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default AreaChartComponent