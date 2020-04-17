import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

let cantidadC1;
let cantidadC2 = 10;

let cantidadV1;
let cantidadV2 = 2;
const data = [
    {
        name: 'Dia Anterior', Clientes: cantidadC2, Ventas: cantidadV2,
    },
    {
        name: 'Dia Solicitado', Clientes: cantidadC1, Ventas: cantidadV1,
    }

];

const Grafica = (PureComponent) => {
    const jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';


    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="info" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Clientes" fill="#8884d8" />
            <Bar dataKey="Ventas" fill="#82ca9d" />
        </BarChart>
    );

}

export default Grafica;