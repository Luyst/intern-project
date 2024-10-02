import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // Import CSS mặc định
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = () => {
    const [startDate, setStartDate] = useState();
    return (
        <div className="calendar-container">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
};

export default DateFilter;
