import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';

interface DataPoint {
    totalAmount: number;
    year: number;
    month: number;
}

interface BarChartComponentProps {
    data: DataPoint[];
}

const getMonthName = (month: number): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month - 1];
};

const BarChartComponent: FC<BarChartComponentProps> = ({ data }) => {
    const formattedData = data.map((item) => ({
        ...item,
        name: getMonthName(item.month)
    }));

    return (
        <ResponsiveContainer width="100%" height="100%" style={{ position: "relative", left: "-10px", marginTop: "30px" }}>
            <BarChart data={formattedData} >
                <CartesianGrid strokeDasharray="3 3" stroke='#555555' />
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
                <Legend />
                <Tooltip
                    formatter={(value: any) => [`$${value.toLocaleString()}`, 'Amount']}
                    labelStyle={{ color: 'black' }}
                />
                <Bar dataKey="totalAmount" name="Expenses per month" label={{ position: 'top', fontSize: "10px", fill: "var(--primary-color)" }} fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;