import React, { useState } from 'react';
import Tag from '../Tag';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Sumary: React.FC = () => {
    const handleDateChange = (newValue: Date | null) => {
        console.log('Selected date:', newValue); // Xử lý sự kiện khi chọn ngày
    };

    return (
        <div className="summary-container">
            <div className="sumary-title text-orange-500 text-2xl font-bold">Tổng quan</div>
            <Tag percentage={50} value={4221} type="devide" active={3799} inactive={422} />
            <Tag percentage={50} value={4221} type="service" active={3799} inactive={422} />
            <Tag percentage={50} value={4221} type="status" active={3799} inactive={422} />

            <DateCalendar onChange={handleDateChange} />
        </div>
    );
};

export default Sumary;
