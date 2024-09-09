import React, { useState } from 'react';
import { CalendarIcon } from '../Icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateFilter.css';

const DateFilter: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date('2018-07-22'));
    const [endDate, setEndDate] = useState(new Date('2018-07-22'));
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    return (
        <div className="dateFilterContainer flex flex-row gap-4 text-gray-400s items-center">
            <div className="dateStartContainer relative flex">
                <input
                    type="text"
                    value={startDate.toISOString().split('T')[0]}
                    readOnly
                    name="dateStartInput"
                    id="dateStartInput"
                    className="dateInput p-2 rounded-md max-w-32 focus:outline-none border-2 border-white focus:border-blue-500 focus:text-blue-500"
                    onClick={() => setShowStartDatePicker(true)}
                />
                <span
                    onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                    className="absolute right-3 top-0 translate-y-1/2 z-10"
                >
                    <CalendarIcon />
                </span>
                <div className="absolute top-10 z-10 ">
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
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.51129 3.13807L3.96467 2.01241L1.44455 0.178209C0.910697 -0.20463 0 0.0696425 0 0.618188V4.17802V7.38359C0 7.93213 0.910697 8.20641 1.44455 7.81785L5.51129 4.85799C6.1629 4.38944 6.1629 3.61233 5.51129 3.13807Z"
                    fill="#0054A6"
                />
            </svg>

            <div className="dateEndContainer relative flex">
                <input
                    type="text"
                    value={endDate.toISOString().split('T')[0]}
                    readOnly
                    name="dateEndInput"
                    id="dateEndInput"
                    className="dateInput p-2 rounded-md max-w-32 focus:outline-none border-2 border-white focus:border-blue-500 focus:text-blue-500"
                    onClick={() => setShowEndDatePicker(true)}
                />
                <span
                    onClick={() => setShowEndDatePicker(!showEndDatePicker)}
                    className="absolute right-3 top-0 translate-y-1/2 z-10"
                >
                    <CalendarIcon />
                </span>
                {showEndDatePicker && (
                    <div className="absolute top-10 z-10">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => {
                                setEndDate(date || new Date());
                                setShowEndDatePicker(false);
                            }}
                            inline
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DateFilter;
