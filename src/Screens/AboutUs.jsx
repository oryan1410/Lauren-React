import React, { useState, useEffect } from 'react';
import AlcoholCard from '../HelpComponents/AlcoholCard';
// import SpritzCard from '../HelpComponents/SpritzCard';
import DishCard from '../HelpComponents/DishCard';
import '../App.css';
import '../styles/Wines.css'
import dishes from '../DishesArr.json'
// import SearchAppBar from '../SearchAppBar';
import { Container } from 'react-bootstrap';
import DropDown from '../HelpComponents/DropDown';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';

// import Collapse from '@mui/material/Collapse';
import Collapse from '../HelpComponents/Collapse';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BeerCard from '../HelpComponents/BeerCard';
import { useTranslation } from 'react-i18next';
import specialArr from '../DjSpecialArr.json';





export default function AboutUs(props) {

    const {t}= useTranslation();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

      }, []);



    return (
        <Container className={`home ${isVisible ? 'visible' : 'notVisable'}`} style={{paddingBottom:'70px'}}>
        <h1 className='homeTitle'>{t('Events')}</h1>
        <iframe src='https://forms.gle/Kco27BTFaf6smRMYA' width='100%' height='1000px'></iframe>
        <div style={{height: '50px'}}></div>
        {/* <h1 className='homeTitle' >{t('Friday Special')}</h1>
            {specialArr.map((special) => {
                return <AlcoholCard key={special.IdAlc} alcohol={special} title={special.Name_Eng} />
            })}         */}
        </Container>
    );
};

