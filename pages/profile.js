import { useUser } from '../lib/hooks';
import Layout from '../components/layout';
import Comprador from './comprador';

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <Comprador />
  )
}

export default Profile
