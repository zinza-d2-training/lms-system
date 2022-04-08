import { Button, Link } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Link as RouterLink, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Footer from '../Layout/Footer/Footer';
import MainContent from './../Layout/Content/MainContent';
import Header from './../Layout/Header/Header';

const Home = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  useEffect(() => {
    const currentUser = userContext.user;
    if (!currentUser) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <MainContent>
        <Link component={RouterLink} to={'courses'}>
          courses
        </Link>
        <Button>
          <Link component={RouterLink} to={'courses/add-courses'}>
            Add
          </Link>
        </Button>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Home;
