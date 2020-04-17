import { useUser } from "../lib/hooks";
import Layout from "../components/Layout";
import empresas from './api/empresas.json';
import Card from '../components/Card';

const Empresa_Admin = () => {
    const user = useUser({ redirectTo: '/login' });
    return (
        <>
            <Layout>
                {user&&user.type=='admin'&&empresas.map(empresa => (
                    <Card nombre={empresa.empresa} descripcion={empresa.descripcion} ventas={empresa.ventas_actual} clientes={empresa.clientes_actual} />
                ))}
            </Layout>
        </>
    );
}

export default Empresa_Admin;