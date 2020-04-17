const Card2 = (props) => {
    return (
        <>

            <div className="col-md-8">
                <div className="card mb-3" id="empresas" tabIndex="-1" role="dialog" onClick={() => $('#descripcionmodal').modal('show')}>
                    <div className="row no-gutters" >
                        <div className="col-md-3">
                            <img src={props.img} className="card-img" width="100" height="100" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.empresa}</h5>
                                <p className="card-text"><b>{props.title}</b><br />{props.body}</p>
                                <p className="card-text"><small className="text-muted">Valido hasta: {props.date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {
                    `
                        h3, h5, p {
                            color:black;
                        }

                        .card-img {
                            background-size: cover;
                            width: 150px;
                            height: 150px;
                            border-radius: 50%;
                        }

                        .card {
                            border-radius: 25px;
                            width: 800px;
                            height: 170px;
                        }
                       
                    `
                }
            </style>
        </>
    );
}

export default Card2;