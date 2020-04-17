
const Modalpago = (props) => {

    return (
        <>

            <div className="modal fade text-dark" id="pago" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog text-dark" role="document">
                    <div className="modal-content text-dark">

                        <div className="row justify-content-md-center">
                            <div className="modal-header">
                                <div className="col-1"> </div>
                                <div className="col-10">
                                    <h5 className="modal-title text-dark" id="exampleModalLabel">{props.empresa}</h5>
                                </div>
                            </div>
                            <center>
                                <img src={props.imagen} className="card-img" width="100" height="250" />
                            </center>
                        </div>

                        <div className="modal-body">
                            <form>

                                <div className=" panel panel-default col-md-8">
                                    <center>
                                        <h4>Descripción del producto:</h4>
                                        <div className="panel-body">{props.descripcion}</div>
                                    </center>
                                </div>

                                <div className="form-group">
                                    <div className="form-group">
                                        <label for="exampleFormControlSelect1"><h4><br />Cantidad:</h4></label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                        </select>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Pagar</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Modalpago;