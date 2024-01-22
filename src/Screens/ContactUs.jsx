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
            <div className={`home ${isVisible ? 'visible' : 'notVisible'}`}>
                <div className='contactUs'>
                    <h2 className='ContactTitle'>Contact Us || צור קשר</h2>
                    <p className={`ContactText ${language === 'heb' && 'hebContactText'}`}>{t('Phone Number')}: 073-363-3523 </p>
                    <p className={`ContactText ${language === 'heb' && 'hebContactText'}`}>{t("Email")}: lauren.wine.bar@gmail.com</p>
                    <p className={`ContactText ${language === 'heb' && 'hebContactText'}`}>{t("Facebook")}: <a className='contactLink' href='https://www.facebook.com/profile.php?id=61553617899137' >Go To Facebook</a> </p>
                    <p className={`ContactText ${language === 'heb' && 'hebContactText'}`}>{t("Instagram")}:<a className='contactLink' href='https://www.instagram.com/lauren_winebar/'> Go To Instagram </a></p>

                    <div className='wirkingHours'>
                        <h3 className='ContactSubTitle'>Working Hours || שעות פעילות</h3>
                        <p className='ContactText'>{t('weekDays')}: 18:00-2:00</p>
                        <p className='ContactText'>{t('weekEnds')}: 12:00-2:00</p>
                    </div>
                    <p className={`ContactText ${language === 'heb' && 'hebContactText'}`}>{t('Adress')}</p>

                    <div className='navigateButton'>
                        <a aria-label='Navigate to Us using Waze' className='contactLink' target='_blank' href='https://ul.waze.com/ul?preview_venue_id=22872388.228527268.3889&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
                            {t('NavigateToUs')}
                        </a>
                    </div>
                </div>
            </div>
        </Container>

    );
};

