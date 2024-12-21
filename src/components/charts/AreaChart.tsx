"use client"

import { FC } from 'react';
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface DataPoint {
    totalAmount: number;
    year: number;
    month: number;
}

interface AreaChartComponentProps {
    incomeData: DataPoint[];
    expenseData: DataPoint[];
}

const getMonthName = (month: number): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month - 1];
};

const AreaChartComponent: FC<AreaChartComponentProps> = ({ incomeData, expenseData }) => {
    // Combine and format the data
    const formattedData = incomeData.map((income, index) => ({
        name: getMonthName(income.month),
        income: income.totalAmount,
        expense: expenseData[index]?.totalAmount || 0
    }));

    return (
        <ResponsiveContainer width="100%" height="80%" style={{ position: "relative", left: "-30px" }}>
            <AreaChart
                data={formattedData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    stroke="var(--primary-color)"
                    tick={{ fill: 'var(--primary-color)' }}
                    label={{ position: "outsidebottom", fill: 'var(--primary-color)' }}
                    fontSize="10px"
                />
                <YAxis
                    stroke="var(--primary-color)"
                    tick={{ fill: 'var(--primary-color)' }}
                    label={{ angle: -90, position: 'insideLeft', fill: 'var(--primary-color)' }}
                    domain={[0, 600]}
                    fontSize="10px"
                />
                <CartesianGrid strokeDasharray="7 7" stroke='#555555' />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="income"
                    name="Income"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorIncome)"
                />
                <Area
                    type="monotone"
                    dataKey="expense"
                    name="Expense"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorExpense)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;