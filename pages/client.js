import Modalpago from '../components/ModalPago';
import Layout from '../components/Layout';
import empresas from './api/empresas.json';
import { makePublicRouterInstance } from 'next/router';

const Gallery = () => {

    return (
        <>

            <Layout>
                <center>
                    <h2>Bienvenido COMPRADOR, elige una de las empresas a continuación:</h2>
                </center>


                <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

                    <center>
                        <div className="controls-top">
                            <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left fa-3x pr-3"></i></a>
                            <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right fa-3x pl-3"></i></a>
                        </div>
                        <br/>

                        <div className="carousel-inner" role="listbox">

                            <div className="carousel-item active">
                                <div className="row">
                                    {
                                        empresas.map(empresa => (
                                            <div className="col-md-3 col-sm-6 col-xs-12">
                                                <div className="card mb-2">
                                                    <img className="card-img-top" src={empresa.img} height="100" alt={empresa.empresa}></img>
                                                    <br/>
                                                    <div className="card-footer">
                                                        <h4 className="card-title">{empresa.empresa}</h4>
                                                        <button className="btn btn-dark my-2 my-sm-0" onClick={() => $('#pago').modal('show')}>Comprar</button>
                                                        <Modalpago empresa={empresa.empresa} imagen={empresa.img} descripcion={empresa.descripcion} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </center>

                </div>

                <style jsx global>
                    {
                        `
                        .card {
                            height: 100%;
                            width: 100%;
                        }

                        .card-title {
                            color: #333;
                        }

                        .btn-dark {
                            margin-bottom: 0px;
                        }
                    `
                    }
                </style>
                <style jsx>
                    {`
                    .btn {
                        background-color:#AB1500;
                    }
                    .btn:hover {
                        opacity:0.7;
                    }
                    i {
                        background-color:#AB1500;
                    }
                `}
                </style>

            </Layout>
        </>
    );

}

export default Gallery;