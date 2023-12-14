import './App.css';
import { CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { CircleFlag } from 'react-circle-flags';

// import Navbar from './HelpComponents/Navbar';

import Home from './Screens/Home';
import Wines from './Screens/Wines';
import AlcoholPage from './Screens/AlcoholMain';
import Dishes from './Screens/Dishes';
import WinePage from './Screens/WinePage';
import DishesPage from './Screens/DishesPage';
import AboutUs from './Screens/AboutUs';
import Events from './Screens/Events';
import Footer from './HelpComponents/Footer';
import LoginPage from './Screens/LoginPage';
import Favorites from './Screens/Favorites';

import { useUserContext } from './UserContext';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function App() {


  // goToHome = () => {
  //   history.push('/home');
  // }
 

  const { language, setUserLanguage } = useUserContext();

  useEffect(() => {
    console.log('language', language);
  }, [language]);

  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // go to home page after 4 seconds

  const closeNavbar = () => {
    setExpanded(false);
  };

  const location = useLocation();

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
        <div style={{height:'20px'}}></div>
        <CardMedia className={`fade-in-element ${isVisible ? 'visible' : 'notVisable'}`}>
          <img src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2FSlice%201%20(3)%201.png?alt=media&token=d61940e9-da93-4590-87a7-756719d03ccd'} className="App-logo" alt="logo" />
          <p>
            Lauren- wine bar in the valley
          </p>
        </CardMedia>
  
      </div>
    );
  }


  useEffect(() => {
    if (isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);


  const [isPageBottom, setIsPageBottom] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
        const isBottom = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight;
        setIsPageBottom(isBottom);
      };

      const handleScrollTop = () => {
        const isTop = document.documentElement.scrollTop === 0;
        setIsPageTop(isTop);
      };

    
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleScrollTop);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScrollTop);
      };
    }, []);
  
  useEffect(() => {
      console.log('isPageBottoma', isPageBottom);
  }, [isPageBottom]);




  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="App-Body">
        <Navbar bg="light" expand="xxl" fixed='top' expanded={expanded} onToggle={() => setExpanded(!expanded)} collapseOnSelect>
            <Navbar.Brand href="\home">
              <img  src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2F%D7%9C%D7%95%D7%A8%D7%9F%20%D7%9C%D7%95%D7%92%D7%95%20%D7%95%D7%A7%D7%98%D7%95%D7%A8%D7%99-05.png?alt=media&token=ca7d6b59-a71a-4547-87db-970a9d75dc63'} height={60} width={100} alt="Go Home" />
            </Navbar.Brand>
            <Navbar.Text style={{width:'100px'}}>
              <img src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2F%D7%9C%D7%95%D7%A8%D7%9F%20%D7%9C%D7%95%D7%92%D7%95%20%D7%95%D7%A7%D7%98%D7%95%D7%A8%D7%99-06.png?alt=media&token=d154edfd-1f34-48fa-81c0-4c0f0a749f5f'} height={70} width={70} alt="logo" />
            </Navbar.Text>
            <Navbar.Toggle className='navbarToggle' >
              <span ><MenuSharpIcon className='toggleIcon'/></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <div className='languageIconDiv'>
              {language === 'eng' ?
                        <CircleFlag
                            countryCode={'il'}
                            className='langIcon'
                            alt={'Hebrew'}
                            onClick={() => setUserLanguage('heb')}
                            style={{
                                boxShadow: language === 'heb' ? '0px 0px 20px #000' : 'none',
                                
                            }}
                        />:
                        <CircleFlag
                            countryCode={'us'}
                            alt={'English'}
                            className='langIcon'
                            onClick={() => setUserLanguage('eng')}
                            style={{
                                boxShadow: language === 'eng' ? '0px 0px 20px #000' : 'none',
                            }}
                        />
                        }
                    </div>
              <Nav className="ml-auto" >
                <Nav.Item>
                  <Link to="/home" className={`nav-link ${location.pathname === '/home' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'Home':'בית'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/wines" className={`nav-link ${location.pathname === '/wines' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'Wines':'יינות'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/alcohol" className={`nav-link ${location.pathname === '/alcohol' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'Alcoholic Beverages':'משקאות אלכוהולים'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/dishes" className={`nav-link ${location.pathname === '/dishes' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'Dishes':'מנות'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/favorites" className={`nav-link ${location.pathname === '/favorites' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'Favorites':'מועדפים'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'Login':'התחברות'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'Events':'אירועים'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/aboutUs" className={`nav-link ${location.pathname === '/aboutUs' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'About Us':'אודותינו'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='eng'?'Contact':'צור קשר'}</Link>
                </Nav.Item>
                {/* <Nav.Link href="\login" className='nav-link'>Login</Nav.Link>
              <Nav.Link href="\dishes">Dishes</Nav.Link>
              <Nav.Link href="\wines">Wines</Nav.Link>
              <Nav.Link href="\events">Events</Nav.Link>
              <Nav.Link href="\contact">Contact</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div style={{ height: '90px' }}></div>
        
          <Routes>
            <Route path="/" element={!isVisible ? <FadeIn setIsVisible={() => { setIsVisible(true) }} /> : <Home isVisible={isVisible} />} />
            <Route path="/home" element={<Home isVisible={true} />} />
            {/* <Route path="/about" element={<About />} />*/}
            <Route path="/wines" element={<Wines />} />
            <Route path="/alcohol" element={<AlcoholPage />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            
            <Route path="/winePage/:id" element={<WinePage />} />
            <Route path="/dishPage/:id" element={<DishesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/favorites" element={<Favorites />} />


            {/* <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />*/}
          </Routes>
          {/* <Navbar /> */}
               

      </div>
      {!isPageBottom && !isPageTop &&<ArrowCircleUpIcon className='scrollToTop' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>}
      <Footer />


    </div>
  );
}



export default App;