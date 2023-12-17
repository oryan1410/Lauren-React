import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import '../styles/Home.css'
import { Grid } from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';
export default function Events(props) {

    const [isVisible, setIsVisible] = useState(false);
    const {getFilters} = useUserContext();
    const {t} = useTranslation();

    useEffect(() => {
        setIsVisible(true);

      }, []);



    return (
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
        <span className='favoriteTitle'>{t('Events')}</span></div>
    );
};

