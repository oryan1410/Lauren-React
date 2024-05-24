import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import '../styles/Home.css'
import { Grid } from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';

export default function AboutUs(props) {

    const {t}= useTranslation();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

      }, []);



    return (
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
        <h1 className='homeTitle'>{t('Events')}</h1>
        <iframe src='https://forms.gle/Kco27BTFaf6smRMYA' width='100%' height='1000px'></iframe>
        <div style={{height: '50px'}}></div>
        </div>
    );
};

