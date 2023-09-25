import './App.css';
import { CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import Navbar from './HelpComponents/Navbar';

import Home from './Screens/Home';
import Wines from './Screens/Wines';
import Dishes from './Screens/Dishes';
function App() {

  // goToHome = () => {
  //   history.push('/home');
  // }

  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // go to home page after 4 seconds

  const closeNavbar = () => {
    setExpanded(false);
  };

  const location = useLocation();



  useEffect(() => {
    if (isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  return (
    <div className="App">
      <div className="App-header">
        <Navbar bg="light" expand="xxl" fixed='' expanded={expanded} onToggle={() => setExpanded(!expanded)} collapseOnSelect style={{ zIndex: 2 }}>
          <Container>
            <Navbar.Brand href="\home">
              <img src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2F%D7%9C%D7%95%D7%A8%D7%9F%20%D7%9C%D7%95%D7%92%D7%95%20%D7%95%D7%A7%D7%98%D7%95%D7%A8%D7%99.pdf%20-%20Page%202%20of%204.png?alt=media&token=10d8afd8-14c2-45b6-9a88-507070520c8b'} height={80} width={80} alt="Go Home" />
            </Navbar.Brand>
            <Navbar.Text>
              <img src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2F%D7%9C%D7%95%D7%A8%D7%9F%20%D7%9C%D7%95%D7%92%D7%95%20%D7%95%D7%A7%D7%98%D7%95%D7%A8%D7%99.pdf%20-%20Page%204%20of%204.png?alt=media&token=0a42b53d-5aea-459c-96f1-6403b7ab1189'} height={80} width={80} alt="logo" />
            </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ width: 80, borderWidth: 0, paddingRight: 0, marginRight: 0, position: 'relative', left: 15 }} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" >
                <Nav.Item>
                  <Link to="/home" className={`nav-link ${location.pathname === '/home' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/wines" className={`nav-link ${location.pathname === '/wines' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>Wines</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/dishes" className={`nav-link ${location.pathname === '/dishes' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>Dishes</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>Events</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>Contact</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>Login</Link>
                </Nav.Item>

                {/* <Nav.Link href="\login" className='nav-link'>Login</Nav.Link>
              <Nav.Link href="\dishes">Dishes</Nav.Link>
              <Nav.Link href="\wines">Wines</Nav.Link>
              <Nav.Link href="\events">Events</Nav.Link>
              <Nav.Link href="\contact">Contact</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ height: '96px' }}></div>
          <Routes>
            <Route path="/" element={!isVisible ? <FadeIn setIsVisible={() => { setIsVisible(true) }} /> : <Home isVisible={isVisible} />} />
            <Route path="/home" element={<Home isVisible={true} />} />
            {/* <Route path="/about" element={<About />} />*/}
            <Route path="/wines" element={<Wines />} />
            <Route path="/dishes" element={<Dishes />} />
            {/* <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />*/}
          </Routes>
          {/* <Navbar /> */}
      </div>
    </div>
  );
}

function FadeIn(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    handleButtonClick();
  }, []);


  const handleButtonClick = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => { setIsVisible(false); setAnimationFinished(true) }, 2000);
      return () => { clearTimeout(timeout) };
    }
    if (!isVisible && animationFinished) {
      const timeout = setTimeout(() => { props.setIsVisible(true); }, 2000);
      return () => { clearTimeout(timeout);; setAnimationFinished(true) };
    }
  }, [isVisible]);



  return (
    <div>
      <CardMedia className={`fade-in-element ${isVisible ? 'visible' : 'notVisable'}`}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2FSlice%201%20(3)%201.png?alt=media&token=d61940e9-da93-4590-87a7-756719d03ccd'} className="App-logo" alt="logo" />
        <p>
          Lauren- wine bar in the valley
        </p>
      </CardMedia>

    </div>
  );
}

export default App;