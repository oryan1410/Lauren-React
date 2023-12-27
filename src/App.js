import './App.css';
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
import FadeIn from './HelpComponents/FaidIn';
import NotAllowed from './Screens/NotAllowed';

import { useUserContext } from './UserContext';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function App() {

  // goToHome = () => {
  //   history.push('/home');
  // }

  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    const newFontSize = fontSize + 1;
    setFontSize(newFontSize);
    document.documentElement.style.setProperty('--main-font-size', `${newFontSize}px`);
  };

  const decreaseFontSize = () => {
    const newFontSize = fontSize - 1;
    setFontSize(newFontSize);
    document.documentElement.style.setProperty('--main-font-size', `${newFontSize}px`);
  }
 

  const { language, setUserLanguage, navBarVisable } = useUserContext();

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

  useEffect(() => {
    console.log('language', language);
  }, [language]);




  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="App-Body">
        { navBarVisable && <Navbar bg="light" expand="xxl" fixed='top' expanded={expanded} onToggle={() => setExpanded(!expanded)} collapseOnSelect>
            <Navbar.Brand href="\home">
              <img src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2F%D7%9C%D7%95%D7%A8%D7%9F%20%D7%9C%D7%95%D7%92%D7%95%20%D7%95%D7%A7%D7%98%D7%95%D7%A8%D7%99-05.png?alt=media&token=ca7d6b59-a71a-4547-87db-970a9d75dc63'} height={60} width={100} alt="Go Home" />
            </Navbar.Brand>
            <Navbar.Text style={{width:'100px'}}>
              <img src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2F%D7%9C%D7%95%D7%A8%D7%9F%20%D7%9C%D7%95%D7%92%D7%95%20%D7%95%D7%A7%D7%98%D7%95%D7%A8%D7%99-06.png?alt=media&token=d154edfd-1f34-48fa-81c0-4c0f0a749f5f'} height={70} width={70} alt="logo" />
            </Navbar.Text>
            <Navbar.Toggle className='navbarToggle' >
              <span ><MenuSharpIcon className='toggleIcon'/></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <div className='languageIconDiv'>
              {language === 'en' ?
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
                            onClick={() => setUserLanguage('en')}
                            style={{
                                boxShadow: language === 'en' ? '0px 0px 20px #000' : 'none',
                            }}
                        />
                        }
                    </div>
              <Nav className="ml-auto" >
                <Nav.Item>
                  <Link to="/home" className={`nav-link ${location.pathname === '/home' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Home':'בית'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/wines" className={`nav-link ${location.pathname === '/wines' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Wines':'יינות'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/alcohol" className={`nav-link ${location.pathname === '/alcohol' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Alcoholic Beverages':'משקאות אלכוהולים'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/dishes" className={`nav-link ${location.pathname === '/dishes' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Dishes':'מנות'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/favorites" className={`nav-link ${location.pathname === '/favorites' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Favorites':'מועדפים'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Login':'התחברות'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Events':'אירועים'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/aboutUs" className={`nav-link ${location.pathname === '/aboutUs' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'About Us':'אודותינו'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Contact':'צור קשר'}</Link>
                </Nav.Item>
                <Nav.Item>
                <button onClick={increaseFontSize}>Increase Font Size</button>
                </Nav.Item>
                <Nav.Item>
                <button onClick={decreaseFontSize}>Decrease Font Size</button>
                </Nav.Item>

                {/* <Nav.Link href="\login" className='nav-link'>Login</Nav.Link>
              <Nav.Link href="\dishes">Dishes</Nav.Link>
              <Nav.Link href="\wines">Wines</Nav.Link>
              <Nav.Link href="\events">Events</Nav.Link>
              <Nav.Link href="\contact">Contact</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
        </Navbar> 
        }
        <div style={{ height: '90px' }}></div>
        
          <Routes>
            <Route path="/" element={<FadeIn setIsVisible={() => { setIsVisible(true) }} /> } />
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
            <Route path="/not-allowed" element={<NotAllowed />} />


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