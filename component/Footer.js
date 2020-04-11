
const footerStyle = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "30%"
}

const Footer = () => {
    return (
        <footer style={footerStyle} className="footer">
            <hr />
            <div className="text-center center-block">
                <p className="txt-railway">- R E A C T I V A -</p>
                <pan>La Economía de México</pan> <br/>
                <br />
                <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
            </div>
            <hr />
        </footer>
    );
}

export default Footer;