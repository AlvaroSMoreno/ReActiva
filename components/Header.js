import Link from 'next/link';
import { useUser } from '../lib/hooks';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Dragger from './Dragger';
import Calendar from './Calendar';
import Grafica from './Grafica';

const Header = ({ admin_stat }) => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>REACTIVA</title>
        <link rel="shortcut icon" type="image/png" href="/logo.png" />
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin />
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        />
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
      </Head>
      <MyNavBar />
    </>
  );
}



const MyNavBar = () => {
  const user = useUser();

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link href="/"><a className="navbar-brand"><img src="/logo.png" width="50"></img>REACTIVA</a></Link>

          <div className="collapse navbar-collapse" id="navbarColor02">

            {user ? (user.type == 'buy' ? (<>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link href="/client"><a className="nav-link">Cliente <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                  <Link href="/api/logout"><a className="nav-link">Salir</a></Link>
                </li>
              </ul>
              <ul className="nav navbar-nav mx-auto">
                <li className="nav-item center_nav"><a href="#">Center</a></li>
                <li className="nav-item center_nav"><a href="#">Center</a></li>
                <li className="nav-item center_nav"><a href="#">Center</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger my-2 my-sm-0">Search</button>
                </li>
              </ul>
            </>) : (user.type == 'sell') ? (<>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link href="/service"><a className="nav-link">Empresa <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                  <Link href="/api/logout"><a className="nav-link">Salir</a></Link>
                </li>
              </ul>
              <ul className="nav navbar-nav mx-auto">
                <li className="nav-item center_nav"><button className="btn btn-dark my-2 my-sm-0" onClick={() => $('#mispromociones').modal('show')} >Mis Promociones</button></li>
                <li className="nav-item center_nav"><button className="btn btn-dark my-2 my-sm-0" onClick={() => $('#miprogresomodal').modal('show')} >Mi Progreso</button></li>
                <li className="nav-item center_nav"><button className="btn btn-dark my-2 my-sm-0" onClick={() => $('#nuevoproductomodal').modal('show')}>Nuevo Producto</button></li>
              </ul>
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
                        <Calendar />
                        <hr />
                        <center>
                        <Grafica />
                        </center>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>

                    </div>
                  </div>
                </div>
              </div>

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
            </>) : (<>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link href="/profile"><a className="nav-link">Admin <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                  <Link href="/api/logout"><a className="nav-link">Salir</a></Link>
                </li>
              </ul>
              <ul className="nav navbar-nav mx-auto">
                <li className="nav-item center_nav"><Link href="/empresas"><button className="btn btn-dark my-2 my-sm-0" >Empresas</button></Link></li>
                <li className="nav-item center_nav"><Link href="/promociones"><button className="btn btn-dark my-2 my-sm-0" >Promociones</button></Link></li>
              </ul>
            </>)) : (<>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link href="/"><a className="nav-link">Inicio <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                  <Link href="/login"><a className="nav-link">Ingresar</a></Link>
                </li>
              </ul>
            </>)}

          </div>
        </nav>
      </div>
      <style jsx global>
        {
          `
              .navbar {
                  background-color: #AB1500 !important;
              }
              .center_nav {
                margin: 20px;
              }
              .modal-title {
                color: #333;
              }
              .modal-content{
                color: #333;
              }
              a {
                text-decoration: none;
                color: #fff;
              }
              a:hover {
                color: #fff;
                font-weight: bold;
              }
              
          `
        }
      </style>
    </>
  );
}

export default Header;