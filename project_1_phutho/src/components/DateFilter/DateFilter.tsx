import React, { useState } from 'react';
import './dateFilter.css';
import { CalendarIcon } from '../Icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date('2018-07-22'));
    const [endDate, setEndDate] = useState(new Date('2018-07-22'));
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    return (
        <div className="dateFilterContainer flex flex-row gap-4">
            <div className="dateStartContainer relative flex">
                <input
                    type="text"
                    value={startDate.toISOString().split('T')[0]}
                    readOnly
                    name="dateStartInput"
                    id="dateStartInput"
                    className="dateInput"
                    onClick={() => setShowStartDatePicker(true)}
                />
                <div onClick={() => setShowStartDatePicker(!showStartDatePicker)}>
                    <CalendarIcon />
                </div>
                <div className="absolute top-0">
                    {showStartDatePicker && (
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date || new Date());
                                setShowStartDatePicker(false);
                            }}
                            inline
                            minDate={new Date('2018-01-01')}
                            maxDate={new Date('2018-12-31')}
                        />
                    )}
                </div>
            </div>
            <div className="dateEndContainer relative flex ">
                <input
                    type="text"
                    value={endDate.toISOString().split('T')[0]}
                    readOnly
                    name="dateEndInput"
                    id="dateEndInput"
                    className="dateInput"
                    onClick={() => setShowEndDatePicker(true)}
                />
                <div onClick={() => setShowEndDatePicker(!showEndDatePicker)}>
                    <CalendarIcon />
                </div>
                {showEndDatePicker && (
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => {
                            setEndDate(date || new Date());
                            setShowEndDatePicker(false);
                        }}
                        inline
                        minDate={new Date('2018-01-01')}
                        maxDate={new Date('2018-12-31')}
                    />
                )}
            </div>
        </div>
    );
};

export default DateFilter;
