import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Typed from 'react-typed';

const Home = () => {
  const user = useUser()

  return (
    <Layout>
      
      <h1>Bienvenido a REACTIVA</h1>

      <p><b>REACTIVA</b> es <Typed strings={['una plataforma digital para emprendedores de todo México!', 'una manera sostenible de crear empresas con validación por expertos.', 'una empresa con responsabilidad social y comprometida con el país...', 'la unica plataforma que usarás para solicitar todos tus servicios!']} 
      typeSpeed={30} loop /></p>
      <br/><br/>
      <h4>PASOS:</h4>
      <ol>
        <li>Haz click en login, e ingresa con tu usuario y contraseña!</li>
        <li>
          Serás redirigido al portal pricipal! Empieza a usar la plataforma!
        </li>
        <li>
          Haznos saber que te parece! Y sobre todo... Apoyanos a reactivar la economía de nuestro país!!!
        </li>
      </ol>

      {user && <p>Currently logged in as: {JSON.stringify(user)}</p>}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </Layout>
  )
}

export default Home
