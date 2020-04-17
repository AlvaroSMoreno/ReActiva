import { useUser } from "../lib/hooks";
import Layout from "../components/Layout";
import promos from './api/promos.json';
import Card2 from '../components/Card2';


const Promociones_admin = () => {
    const user = useUser({ redirectTo: '/login' });
    return (
        <>
            <Layout>
                {user && user.type == 'admin' && promos.map(promo => (
                    <Card2 title={promo.title} img={promo.img} body={promo.body} date={promo.date} img={promo.img} empresa={promo.empresa} />
                ))}
            </Layout>
        </>
    );
}

export default Promociones_admin;