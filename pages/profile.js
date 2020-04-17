import { useUser } from '../lib/hooks';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import promos from './api/promos.json';
import empresas from './api/empresas.json';


const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <Layout>
      {(user.type == 'admin')? (<>
        {/*empresas.map(empresa => (
          <Card nombre={empresa.empresa} descripcion={empresa.descripcion} ventas={empresa.ventas_actual} clientes={empresa.clientes_actual} />
        ))*/}
        {promos.map(promo => (
          <Card2 title={promo.title} body={promo.body} date={promo.date} img={promo.img} empresa={promo.empresa} />
        ))}
      </>): (<></>)}
    </Layout>
  )
}

export default Profile;
