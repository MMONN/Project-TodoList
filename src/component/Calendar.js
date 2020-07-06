import React, { useState } from 'react';
import '../css/Calendarcss.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendars() {
      const [date, setDate] = useState(new Date());
      const onChange = () => setDate({ date })
      return (
            <>
                  <div className="calendar">
                        <Calendar
                              onChange={onChange}
                              value={date}
                        />
                  </div>
            </>
      )
}
export default Calendars;