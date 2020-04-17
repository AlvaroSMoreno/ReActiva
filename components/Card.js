
const Card = (props) => {
    return (
        <>

            <div className="col-md-8">
                <div className="card mb-3" id="empresas" tabIndex="-1" role="dialog" onClick={() => $('#descripcionmodal').modal('show')}>
                    <div className="row no-gutters" >
                        <div className="col-md-3">
                            <img src="/logo.png" className="card-img" width="100" height="100" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.nombre}</h5>
                                <p className="card-text">{props.descripcion}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="descripcionmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="row justify-content-md-center">
                            <div className="modal-header">
                                <img src="/logo.png" className="card-img" width="200" height="200" />
                                <h3>{props.nombre}</h3>
                            </div>
                        </div>
                        <center>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row mx-auto">
                                        <div className="container">
                                            <div className="row">
                                                <div className=" panel panel-default col-md-6">
                                                    <h5>Clientes</h5>
                                                    <div className="panel-body"><p>{props.clientes}</p></div>
                                                </div>
                                                <div className="panel panel-default col-md-6">
                                                    <h5>Ventas</h5>
                                                    <div className="panel-body"><p>{props.ventas}</p></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </center>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>


                        </div>

                    </div>
                </div>
            </div>

            <style jsx>
                {
                    `
                        a {
                            border:1px solid black; 
                            width:70px;
                            
                        }

                        h3, h5, p {
                            color:black;
                        }

                        .panel-body {
                            margin: 10%;
                        }

                        .card-img {
                            background-size: cover;
                            width: 150px;
                            height: 150px;
                        }

                        .card {
                            border-radius: 25px;
                            width: 800px;
                            height: 170px;
                        }

                        card:hover {
                            opacity:0.7;
                            border: 1px solid black;
                        s}
                       
                    `
                }
            </style>
        </>
    );
}

export default Card;