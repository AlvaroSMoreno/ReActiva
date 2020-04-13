
import Link from 'next/link';
import ReactDOM from 'react-dom';
import MyApp from "./drag";
import React from 'react';
import Calendar from 'react-calendar';
import {useState} from 'react'





const Calendario =()=> {

    const [fecha,setfecha] = useState(new Date());
    const inputChange = (e) =>{

        setfecha(e);
    }
    return (
      <div>
        <center><Calendar
          onChange={inputChange}
          value={fecha}
        />
        </center>
      </div>
      
    );
  }
  export default Calendario;