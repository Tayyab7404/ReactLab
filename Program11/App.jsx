import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
    const [selectedDate, setSelectedDate] = useState();
    const [calendarText, setCalendarText] = useState('No Date is selected');

    const handleDateChange = (value) => {
        setSelectedDate(value);
        setCalendarText('The selected Date is ' + value.toDateString());
    };

    const handleYearChange = (value) => {
        setCalendarText(value.getFullYear() + ' Year is selected');
    };

    const handleMonthChange = (value) => {
        const month = value.toLocaleString('default', { month: 'long' });
        setCalendarText(`${month} Month is selected`);
    };

    return (
        <div className='app'>
            <h1 className='calander-details'>{calendarText}</h1>
            <Calendar className={'Calendar'} onClickMonth={handleMonthChange} onClickYear={handleYearChange} onChange={handleDateChange} value={selectedDate}/>
        </div>
    );
}

export default App;