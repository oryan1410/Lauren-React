import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import '../styles/Home.css'
import { Grid } from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import '../styles/Events.css'
export default function Events(props) {

    const [isVisible, setIsVisible] = useState(false);
    const {language} = useUserContext();
    const {t} = useTranslation();

    useEffect(() => {
        setIsVisible(true);

      }, []);



    return (
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
        <span className='eventsTitle'>{t('Events')}</span>
        <div className={`soonToBeDiv ${language==='heb' && 'hebrew'}`}>
            <span className='soonToBeText'>{t('SoonToBe')}</span>
        </div>
        </div>
        
    );
};

