import Layout from "../components/Layout"
import { useUser } from "../lib/hooks";
import Progress from "../components/Progress";
import empresas from './api/empresas.json';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

const Service = () => {
    const user = useUser({ redirectTo: '/login' });
    
    return(
        <>
            <Layout>
                <div className="container">
                    <div className="pb">
                        <center><h1>BIENVENIDO: {user.empresa}</h1></center>
                        <Progress done={parseInt(user.done)} />
                    </div>
                    
                </div>
            </Layout>
            <style jsx>
                {
                    `
                        
                    `
                }
            </style>
        </>
    );
}

export default Service;