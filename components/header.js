import Link from 'next/link'
import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()

  return (
    <header>
      <nav className="navBar fixed-top">
        <div className="navbar-brand">
        <Link href="/">
          <a >
            <img src="/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
            REACTIVA
        </a>
        </Link>
        </div>
        <form className="form-inline">
        <ul>
            {user ? (
              <>
                <li className="d">
                  <Link href="/profile">
                    <a className="btn btn-default">INICIO</a>
                  </Link>
                </li>
                <li className="d">
                  <a className="btn btn-default" href="/api/logout">SALIR</a>
                </li>
              </>
            ) : (
                <li className="d">
                  <Link href="/login">
                    <a className="btn btn-default">INGRESAR</a>
                  </Link>
                </li>
              )}
          </ul>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-danger my-2 my-sm-0">Search</button>
        </form>
      </nav>
      <style jsx>{`
        ul {
          list-style: none;
        }

        li {
          display: inline;
        }

        .form-inline {
          margin-left: 50%;
        }

        header {
          max-height:10%;
        }

        .btn-outline-danger {
          color:white;
        }
        
        a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }
        .navBar {
          color: #fff;
          background-color: #AB1500;
        }
        .btn:hover {
          opacity:0.7;
          border: 1px solid white;
          background-color: white;
          color: black;
        }
      `}</style>
    </header>
  )
}

export default Header
