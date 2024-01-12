import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Home.css'
import { Grid } from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import '../styles/ContactUs.css'
import MapIcon from '@mui/icons-material/Map';

export default function ContactUs(props) {

    const [isVisible, setIsVisible] = useState(false);
    const { language } = useUserContext();
    const { t } = useTranslation();

    useEffect(() => {
        setIsVisible(true);

    }, []);



    return (
        <Container>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <div className='contactUs'>
                    <span className='ContactTitle'>Contact Us || צור קשר</span>
                    <span className={`ContactText ${language === 'heb' && 'hebContactText'}`}>טלפון: </span>
                    <span className={`ContactText ${language === 'heb' && 'hebContactText'}`}>מייל: </span>
                    <span className={`ContactText ${language === 'heb' && 'hebContactText'}`}>פייסבוק: </span>
                    <span className={`ContactText ${language === 'heb' && 'hebContactText'}`}>אינסטגרם:<a className='contactLink' href='https://www.instagram.com/lauren_winebar/'> Go To Instagram </a></span>


                    <div className='wirkingHours'>
                        <span className='ContactSubTitle'>Working Hours || שעות פעילות</span>
                        <span className='ContactText'>{t('weekDays')}: 18:00-2:00</span>
                        <span className='ContactText'>{t('weekEnds')}: 9:00-2:00</span>

                    </div>
                    <span className={`ContactText ${language === 'heb' && 'hebContactText'}`}>{t('Adress')}</span>

                    <div className='navigateButton'>
                        <a className='contactLink' target='_blank' href='https://ul.waze.com/ul?preview_venue_id=22872388.228527268.3889&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
                            {t('NavigateToUs')}
                        </a>
                    </div>

                </div>
            </div>
        </Container>

    );
};

