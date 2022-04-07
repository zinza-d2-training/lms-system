import { Container } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Footer from '../Layout/Footer/Footer';
import Header from './../Layout/Header/Header';

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
      <Header/>
      <Container sx={{minHeight: '100px'}}>Home page</Container>
      <Footer/>
    </>
  );
};

export default Home;
