import './App.css';
import { CardMedia } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { Route,Routes } from 'react-router-dom';

import Home from './Screens/Home';

function App() {

  // goToHome = () => {
  //   history.push('/home');
  // }

  const [isVisible, setIsVisible] = useState(false);
  // go to home page after 4 seconds



  useEffect(() => {
    if (isVisible) {
      setIsVisible(true);    }
  }, [isVisible]);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={!isVisible? <FadeIn setIsVisible={()=>{setIsVisible(true)}} />: <Home isVisible={isVisible} />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dishes" element={<Menu />} /> */}
        </Routes>
        
      </header>
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
      const timeout = setTimeout(() => {setIsVisible(false);setAnimationFinished(true)}, 2000);
      return () => {clearTimeout(timeout)};
    }
    if (!isVisible && animationFinished) {
      const timeout = setTimeout(() => {props.setIsVisible(true);}, 2000);
      return () => {clearTimeout(timeout);;setAnimationFinished(true)};
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
