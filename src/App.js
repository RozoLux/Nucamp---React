import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar dark color= 'primary' sticky= 'top' expand= 'md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      <CampsitesDirectoryPage/>
      <Footer/>
    </div>
  );
}

export default App;
