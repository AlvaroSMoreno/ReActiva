import { useUser } from '../lib/hooks'
import Layout from '../components/Layout'
import Typed from 'react-typed';
import { Button, InputGroup } from 'react-bootstrap';
import Footer from '../components/Footer';

const Home = () => {
  const user = useUser()

  return (
    <>
      <Layout>

        {!user ? (<>
          <div>
            <h1>Bienvenido a REACTIVA</h1>
            <p><b>REACTIVA</b> es <Typed strings={['una plataforma digital para emprendedores de todo México!', 'una manera sostenible de crear empresas con validación por expertos.', 'una empresa con responsabilidad social y comprometida con el país...', 'la unica plataforma que usarás para solicitar todos tus servicios!']}
              typeSpeed={30} loop /></p>
            <hr />
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
            <hr />
          </div>
        </>) : (user.type == 'admin') ? (<>
          <div>
            <h1>Bienvenido GESTOR</h1>
            <p><b>Elige</b> entre <Typed strings={['empresas', 'promociones']}
              typeSpeed={30} loop /></p>
          </div>
        </>) : (user.type == 'buy')?(<>
          <div>
            <h1>Bienvenido Cliente</h1>
            <p>Con<b> REACTIVA </b> podrás acceder a <Typed strings={['empresas mexicanas de alto impacto!', 'promociones y descuentos en servicios!']}
              typeSpeed={30} loop /></p>
          </div>
        </>):(<>
          <div>
            <h1>Bienvenida Empresa</h1>
            <p>Con<b> REACTIVA </b> podrás <Typed strings={['acceder a una gran variedad de clientes para validar tu producto directamente en ambiente productivo!', 'darte a conocer y lograr constituirte formalmente como una empresa, apoyando a la economía mexicana!!!']}
              typeSpeed={30} loop /></p>
          </div>
        </>)}



        {user && <p>Ingreso como: {JSON.stringify(user.name)}</p>}


        <style jsx>{`
  li {
    margin-bottom: 0.5rem;
  }
`}</style>
      </Layout>
    </>
  )
}

export default Home
