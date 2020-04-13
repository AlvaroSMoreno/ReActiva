import Link from 'next/link';
import ReactDOM from 'react-dom'
import Calendario from './drag'
import Dragger from './dragger'

const HeaderV = () => {
    return (
        <>
            <header>
                <div className="row">
                    <div className="col-sm-2.5">
                        <nav>
                            <Link href="/">
                                <a className="navbar-brand" >
                                    <img src="/logo.png" width="100" height="100" alt="" />
                                    <span className="sp">REACTIVA</span>
                                </a>
                            </Link>
                        </nav>
                    </div>

                    <div className="col-sm-2">


                        <button type="button" className="btn btn-dark my-5 my-sm-5" onClick={() => $('#mispromociones').modal('show')}>Mis Promociones</button>
                        <div className="modal fade text-dark" id="mispromociones" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog text-dark" role="document">
                                <div className="modal-content text-dark">

                                    <div className="row justify-content-md-center">
                                        <div className="modal-header">


                                            <div className="col-1"> </div>

                                            <div className="col-10">
                                                <h5 className="modal-title text-dark" id="exampleModalLabel">Mis Promociones</h5>
                                            </div>
                                            <div className="col-1">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Introduce la foto de tu producto:</label>
                                                <Dragger />
                                                <div className="form-group">
                                                    <label for="exampleFormControlSelect1">Tipo de Promoción</label>
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>Producto (ID)</option>
                                                        <option>Descuento en Cantidad ($)</option>
                                                        <option>Descuento en Porcentaje (%)</option>
                                                    </select>
                                                </div>
                                                <div> Introduce el ID o Descuento $/% del producto</div>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message-text" className="col-form-label">Descripción de la Promoción</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success">Guardar</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-.5"></div>

                    <div className="col-sm-2">
                        <button type="button" className="btn btn-dark my-5 my-sm-5" onClick={() => $('#miprogresomodal').modal('show')}>Mi Progreso</button>
                        <div className="modal fade" id="miprogresomodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="row justify-content-md-center">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Mi Progreso</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <Calendario />
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <button type="button" className="btn btn-dark my-5 my-sm-5" onClick={() => $('#nuevoproductomodal').modal('show')}>Nuevo Producto</button>
                        <div className="modal fade" id="nuevoproductomodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="row justify-content-md-center">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Nuevo Producto</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <div>Introduce una foto de tu producto</div>
                                                <Dragger />
                                                <label htmlFor="recipient-name" className="col-form-label">Nombre del producto:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                                <label htmlFor="recipient-name" className="col-form-label">ID del producto:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                                <label htmlFor="recipient-name" className="col-form-label">Precio del producto:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                                <label htmlFor="recipient-name" className="col-form-label">Cantidad de Producto Disponible (Opcional)</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message-text" className="col-form-label">Descipción del Producto:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">

                                        <button type="button" className="btn btn-success">Guardar</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-2">

                        <button type="button" className="btn btn-dark my-5 my-sm-5" onClick={() => $('#datosgeneralesmodal').modal('show')}>Historial de Ventas</button>
                        <div className="modal fade" id="datosgeneralesmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="row justify-content-md-center">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Historial de Ventas</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">

                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>


                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-1.5">
                        <a href="https://www.facebook.com/ReActiva-102371358111286/"><i className="fas fa-user-alt"></i></a>
                    </div>

                </div>
            </header>
            <style jsx>
                                        {
                                            `
                                            .sp {
                                                color: white;
                                                font-weight: bold;
                                            }
                                            `
                                        }
                                    </style>

            <style jsx global>{`
            
            body {
                background-color: #1B1918;
                margin: 0;
                color: #fff;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                  'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
                  'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
              }

              .hhh {
                color: white;
                
            }

            .sp {
                color: white;
                
            }
                
                header {
                    background-color: #AB1500;
                    height: 100px;
                    padding: 0px;
                    
                }
                modal-content{
                    border:1px solid black;
                }
                
                btn:hover {
                    opacity:0.7;
                    border: 1px solid black;
                  }
                `}</style>
        </>
    );
}



const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <>
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
			</div>
            </div>
            <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
                    
        * {
            box-sizing: border-box;
        }
        
        body {
            background-color: #f4f4f4;
            flex-direction: column;
            font-family: 'Montserrat', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        
        
        .progress {
            background-color: #d8d8d8;
            border-radius: 20px;
            position: relative;
            margin: 15px 0;
            height: 30px;
            width: 1000px;
        }
        
        .progress-done {
            background: linear-gradient(to left, #AB1500, #DF250B);
            box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
            border-radius: 20px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 0;
            opacity: 0;
            transition: 1s ease 0.3s;
        }
        `}</style>
        </>
    )
}

const App = () => (
    <>
        <center><h1 className="hhh">Progreso</h1></center>
        <Progress done="66" />

    </>
);

export { HeaderV, App };



