import { useEffect } from 'react';
import { getCurrentUser } from '../../services/AuthService';

const Home = () => {
  useEffect(() => {
    const currentUser = JSON.parse(getCurrentUser() as string);
    if(!currentUser) {
      window.location.replace('/login')
    }
  }, [])
  return (

    <>
      <div >Home page</div>
    </>
  )
}

export default Home
