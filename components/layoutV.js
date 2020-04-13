import Head from 'next/head';
import { HeaderV, App } from './headerV'
import Footer from './footer';

const Layout = (props) => {
    return (
        <>
            <div>
                <Head>
                    <title>REACTIVA</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
                    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
                    <link href="https://cdn.jsdelivr.net/npm/react-calendar@2.18.1/dist/Calendar.css" rel="stylesheet"></link>

                </Head>
                <HeaderV />

                <center><App /></center>
                <main>
                    <div className="container">
                        {props.children}
                    </div>
                </main>
                <Footer />

                <style jsx global>{`
               body {
                
                margin: 0;
                color: black;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                  'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
                  'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
              }
                
            `}</style>
            </div>
        </>

    );
};

export default Layout;