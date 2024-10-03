// src/pages/Dashboard.tsx
import Card from '~/components/Card';
import React from 'react';

// Icon
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StaticChart from './Component/ChartContainer';
import Sumary from './Component/Sumary';

const Dashboard: React.FC = () => {
    return (
        <div className="flex h-full">
            <div className="w-2/3 h-full flex flex-col gap-4 dashboard-main overflow-x-auto">
                <div className="text-title ">Biểu đồ cấp số</div>
                <div className=" gap-3 grid grid-cols-4">
                    <Card
                        color="text-blue-500 bg-blue-100"
                        icon={<CalendarTodayIcon />}
                        title="Số thứ tự đã cấp"
                        changing="+12%"
                        value="4.000"
                    />
                    <Card
                        color="text-blue-500 bg-blue-100"
                        icon={<CalendarTodayIcon />}
                        title="Doanh thu"
                        changing="+12%"
                        value="4.000"
                    />
                    <Card
                        color="text-blue-500 bg-blue-100"
                        icon={<CalendarTodayIcon />}
                        title="Doanh thu"
                        changing="+12%"
                        value="4.000"
                    />
                    <Card
                        color="text-blue-500 bg-blue-100"
                        icon={<CalendarTodayIcon />}
                        title="Doanh thu"
                        changing="+12%"
                        value="4.000"
                    />
                </div>
                <StaticChart />
            </div>
            <div className="sumary absolute  top-0 right-0 h-full bg-white w-1/3 pt-20 px-6">
                <Sumary />
            </div>
        </div>
    );
};

export default Dashboard;
