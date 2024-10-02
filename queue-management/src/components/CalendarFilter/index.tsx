import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import CSS mặc định

const CalendarFilter = () => {
    return (
        <div className="calendar-container">
            <Calendar
                calendarType="islamic"
                view="month" // Chỉ hiển thị tháng
                minDetail="month" // Chỉ cho phép điều hướng theo tháng, không có năm
                formatShortWeekday={(locale, date) => date.toString().slice(0, 2)} // Viết tắt ngày
            />{' '}
        </div>
    );
};

export default CalendarFilter;
