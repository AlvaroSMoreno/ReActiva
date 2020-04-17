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
            height: 10%;
            width: 100%;
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

export default Progress;