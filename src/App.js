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
import AboutUs from './Screens/AboutUs';
import Events from './Screens/Events';
import Footer from './HelpComponents/Footer';
import PageFooter from './HelpComponents/PageFooters';
import LoginPage from './Screens/LoginPage';
import Favorites from './Screens/Favorites';
import FadeIn from './HelpComponents/FaidIn';
import NotAllowed from './Screens/NotAllowed';
import Cocktails from './Screens/Cocktail';
import Cigars from './Screens/Cigars';
import Beverages from './Screens/Beverages';
import ContactUs from './Screens/ContactUs';
import AccessibilityDec from './Screens/AccessibilityDec';

import backgroundImage from './Images/BackgroungImage_Final.png';

import { useUserContext } from './UserContext';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function App() {

  // goToHome = () => {
  //   history.push('/home');
  // }

  useEffect(() => {
    const handleKeyDown = () => {
      document.body.classList.add('using-keyboard');
    };

    const handleMouseDown = () => {
      document.body.classList.remove('using-keyboard');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

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

  const highContrast = () => {
    document.documentElement.style.setProperty('--main-background-color', '#000');
    document.documentElement.style.setProperty('--main-background-color2', '#000');
    document.documentElement.style.setProperty('--secondary-background-color', '#000');
    document.documentElement.style.setProperty('--main--shadow-color', '#fff');
    document.documentElement.style.setProperty('--main-no-border', '2px solid #fff');
    document.documentElement.style.setProperty('--main-card-border', '2px solid #fff');
    document.documentElement.style.setProperty('--main-seperator-color', '#fff');
    document.documentElement.style.setProperty('--footer-font-color', '#fff');  
    document.documentElement.style.setProperty('--main-font-color', '#fff');
    document.documentElement.style.setProperty('--secondary-font-color', '#fff');
    document.documentElement.style.setProperty('--main-label-color', '#fff');
    document.documentElement.style.setProperty('--main-selected-color', '#a5a5a5');
    document.documentElement.style.setProperty('--main-button-border', '1px solid #ffffff!important');
    document.documentElement.style.setProperty('--main-background-image', 'none');
    document.documentElement.style.setProperty('--main-contact-button-border', '1px solid #ffffff');
  }

  const brightMode = () => {
    document.documentElement.style.setProperty('--main-background-color', '#fff');
    document.documentElement.style.setProperty('--main-background-color2', '#fff');
    document.documentElement.style.setProperty('--secondary-background-color', '#fff');
    document.documentElement.style.setProperty('--main--shadow-color', '#000000');
    document.documentElement.style.setProperty('--main-no-border', '2px solid #000');
    document.documentElement.style.setProperty('--main-card-border', '2px solid #000');
    document.documentElement.style.setProperty('--main-seperator-color', '#000');
    document.documentElement.style.setProperty('--footer-font-color', '#000');
    document.documentElement.style.setProperty('--main-font-color', '#000');
    document.documentElement.style.setProperty('--secondary-font-color', '#000');
    document.documentElement.style.setProperty('--main-label-color', '#000');
    document.documentElement.style.setProperty('--main-selected-color', '#a5a5a5');
    document.documentElement.style.setProperty('--main-button-border', '1px solid #000000!important');
    document.documentElement.style.setProperty('--main-background-image', 'none');
    document.documentElement.style.setProperty('--main-contact-button-border', '1px solid #000000');
  }

  const readableFonts = () => {
    document.documentElement.style.setProperty('--main-font-family', "Arial,sans-serif");
    document.documentElement.style.setProperty('--secondary-font-family', "Arial,sans-serif");
    
    document.documentElement.style.setProperty('--main-text-transform', 'none');
  }

  const markLinks = () => {
    document.documentElement.style.setProperty('--main-link-decoration', "underline");
  }

  const resetAccessibility = () => {
    document.documentElement.style.setProperty('--main-font-size', '16px');
    document.documentElement.style.setProperty('--main-background-color', '#121A1C');
    document.documentElement.style.setProperty('--main-background-color2', '#1E2423');
    document.documentElement.style.setProperty('--secondary-background-color', '#967E68');
    document.documentElement.style.setProperty('--main--shadow-color', '#967E68');
    document.documentElement.style.setProperty('--secondary-shadow-color', '#000');
    document.documentElement.style.setProperty('--main-seperator-color', '#967E68');
    document.documentElement.style.setProperty('--main-no-border', '0px');
    document.documentElement.style.setProperty('--main-card-border', '2px solid #967E68');
    document.documentElement.style.setProperty('--main-button-border', '1px solid #ffffff!important');
    document.documentElement.style.setProperty('--main-font-color', '#fff');
    document.documentElement.style.setProperty('--secondary-font-color', '#967E68');
    document.documentElement.style.setProperty('--footer-font-color', '#000');    
    document.documentElement.style.setProperty('--main-label-color','#F1ECE6');
    document.documentElement.style.setProperty('--main-selected-color', '#9b8f81');
    document.documentElement.style.setProperty('--main-font-family', '"anisette-std", "Rubik"');  
    document.documentElement.style.setProperty('--secondary-font-family', '"Urbanist", "Rubik"');
    document.documentElement.style.setProperty('--main-background-image', `url(${backgroundImage})`);
    document.documentElement.style.setProperty('--main-text-transform', 'lowercase');
    document.documentElement.style.setProperty('--main-link-decoration', 'none');
    document.documentElement.style.setProperty('--main-contact-button-border', '1px solid #fff');

  } 

  const { language, setUserLanguage, navBarVisable } = useUserContext();
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
  
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="App-Body">
        { navBarVisable && <Navbar bg="light" style={{zIndex:5}} expand="xxl" fixed='top' expanded={expanded} onToggle={() => setExpanded(!expanded)} collapseOnSelect>
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
                            alt={'language changed to english. press to change to hebrew'}
                            onClick={() => setUserLanguage('heb')}
                            style={{
                                boxShadow: language === 'heb' ? '0px 0px 20px #000' : 'none',
                                
                            }}
                        />:
                        <CircleFlag
                            countryCode={'us'}
                            alt={'language changed to hebrew. press to change to english'}
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
                  <Link to="/dishes" className={`nav-link ${location.pathname === '/dishes' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Menu':'תפריט'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/wines" className={`nav-link ${location.pathname === '/wines' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Wines':'יין'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/alcohol" className={`nav-link ${location.pathname === '/alcohol' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Alcohol':'אלכוהול'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/cocktails" className={`nav-link ${location.pathname === '/cocktails' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Cocktails':'קוקטיילים'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to='/beverages' className={`nav-link ${location.pathname === '/beverages' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>
                    <span className='beveragesLink'>{language==='en'?'Beverages':'שתייה'}</span>
                    </Link></Nav.Item>
                <Nav.Item>
                {/* <Nav.Item>
                  <Link to="/cigars" className={`nav-link ${location.pathname === '/cigars' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Cigars':'סיגרים'}</Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Link to="/favorites" className={`nav-link ${location.pathname === '/favorites' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Favorite Wines':'יינות מועדפים'}</Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Events':'אירועים'}</Link>
                </Nav.Item> */}
     
                  <Link to="/aboutUs" className={`nav-link ${location.pathname === '/aboutUs' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Events':'אירועים'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/accessibility" className={`nav-link ${location.pathname === '/accessibility' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Accessibility Declaration':'הצהרת נגישות'}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : 'non-active'}`} onClick={closeNavbar}>{language==='en'?'Contact':'צור קשר'}</Link>
                </Nav.Item>
                {/* <Nav.Item>
                <button onClick={increaseFontSize}>Increase Font Size</button>
                </Nav.Item>
                <Nav.Item>
                <button onClick={decreaseFontSize}>Decrease Font Size</button>
                </Nav.Item> */}

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
{/* <AccessibilityTab 
highContrast={highContrast} 
increaseFontSize={increaseFontSize} 
decreaseFontSize={decreaseFontSize} 
resetAccessibility={resetAccessibility}
brightMode={brightMode}
readableFonts={readableFonts}
markLinks={markLinks}
/> */}        
          <Routes>
            <Route path="/" element={<FadeIn setIsVisible={() => { setIsVisible(true) }} /> } />
            <Route path="/home" element={<Home isVisible={true} />} />
            {/* <Route path="/about" element={<About />} />*/}
            <Route path="/wines" element={<Wines />} />
            <Route path="/alcohol" element={<AlcoholPage />} />
            {/* <Route path="/beers" element={<Beers />} /> */}
            <Route path="/cocktails" element={<Cocktails />} />
            <Route path="/dishes" element={<Dishes />} />
            {/* <Route path="/cigars" element={<Cigars />} /> */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/beverages" element={<Beverages />} />
            <Route path="/contact" element={<ContactUs />} />
            
            <Route path="/winePage/:id" element={<WinePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/not-allowed" element={<NotAllowed />} />
            <Route path="/accessibility" element={<AccessibilityDec />} />


            {/* <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />*/}
          </Routes>
          {/* <Navbar /> */}
               

      </div>
      {!isPageBottom && !isPageTop &&<ArrowCircleUpIcon alt='go To Top' className='scrollToTop' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>}
      {/* <PageFooter /> */}
      <Footer />
    </div>
  );
}
export default App;