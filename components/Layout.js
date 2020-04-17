import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <>
    <Header />

    <main>
      <div className="container">{props.children}</div>
    </main>


    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        margin-bottom: 20%;
        color: #fff;
        background-color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      a {
        color : #EE442C;
      }
      .container {
        max-width: 42rem;
        margin: 0 auto;
        padding: 2rem 1.25rem;
      }
    `}</style>
    <Footer />
  </>
)

export default Layout;
