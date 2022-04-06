import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Home = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  useEffect(() => {
    const currentUser = userContext.user;
    if (!currentUser) {
      navigate('/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>Home page</div>
    </>
  );
};

export default Home;