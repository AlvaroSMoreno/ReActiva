import Link from 'next/link';
import ReactDOM from 'react-dom';
import React from 'react';
import Calendario from 'react-calendar';
import {useState} from 'react'





const Calendar =()=> {

    const [fecha,setfecha] = useState(new Date());
    const inputChange = (e) =>{

        setfecha(e);
    }
    return (
      <div>
        <center><Calendario
          onChange={inputChange}
          value={fecha}
        />
        </center>
      </div>
      
    );
  }
  export default Calendar;