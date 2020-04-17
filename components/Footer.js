const Footer = () => {
    return (
        <>
            <footer className="footer fixed-bottom">
                <div className="text-center center-block">
                    <p className="txt-railway"><b>- R E A C T I V A -</b></p>
                    <pan>La Economía de México</pan> <br />
                    <a href="https://www.facebook.com/ReActiva-102371358111286/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                    <a href="https://twitter.com/activa_re"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                    <a href="mailto:empresa.reactiva@gmail.com"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                    <a href="https://instagram.com/re.activa.2020/"><i id="social-em" className="fa fa-instagram fa-3x social"></i></a>
                </div>
            </footer>
            <style jsx>
                {
                    `
                        footer {
                            bottom: 0px;
                            position: fixed;
                            height:17%;
                            width: 100%;
                            background-color:#302E2E;
                            color: white;
                        }
                        i {
                            color:#EE442C;
                        }
                    `
                }
            </style>
        </>
    );
}

export default Footer;