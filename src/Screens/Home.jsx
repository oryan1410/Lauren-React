import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Home.css'
import { Grid } from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';
import { InstagramEmbed } from 'react-social-media-embed';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home(props) {

    const [isVisible, setIsVisible] = useState(false);
    const { getFilters } = useUserContext();
    const { t } = useTranslation();

    useEffect(() => {
        getFilters();
    }, []);

    useEffect(() => {
        if (props.isVisible) {
            setIsVisible(true);
        }
    }, [isVisible]);


    return (
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
            <Container style={{ width: '100%', justifyContent: 'center' }}>
                {/* <SearchAppBar /> */}
                <header>
                <h1 className='homeTitle'>{t('lauren wine bar')}</h1>
                </header>
                <main>
                <Grid container spacing={2} >
                    <Grid role={'navigation button'} item xs={5.8}  lg={2.8} className='homeGridItem'>
                        <Link alt='go To red wines' to={{
                            pathname: "/wines",
                        }} state={{expanded: true}}>
                            <span>יינות אדומים</span><br /><span className='engButton'>Red Wines</span>
                        </Link>
                    </Grid>
                    <Grid item xs={5.8} lg={2.8} className='homeGridItem'>
                        <Link alt='go to white wines' to={{
                            pathname: "/wines",
                        }} state={{whiteExpanded: true}}>
                            <span>יינות לבנים</span><br/><span className='engButton'>White Wines</span>
                        </Link>
                                            </Grid>
                    <Grid item xs={5.8} lg={2.8} className='homeGridItem'>
                        <Link alt=' go to rose wines' to={{
                            pathname: "/wines",
                        }} state={{roseExpanded: true}}>
                             <span>יינות רוזה</span><br/> <span className='engButton'>Rose Wines</span>
                        </Link>
                    </Grid>
                    <Grid item xs={5.8} lg={2.8} className='homeGridItem'>
                        <Link alt='go to bubble wines' to={{
                            pathname: "/wines",
                        }} state={{bubbleExpanded: true}}>
                             <span>יינות מבעבעים</span><br/> <span className='engButton'>Bubble Wines</span>
                        </Link>
                    </Grid>
                </Grid>
                </main>
                <main>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    {/* <InstagramEmbed aria-label='Instagram embeded' alt='Lauren instagram profile- press to navigate' url="https://www.instagram.com/lauren_winebar/" width={'100%'}/> */}
                    <iframe aria-label='instagram embedded profile' className="instagram-media" id="instagram-embed-0" src="https://www.instagram.com/lauren_winebar/embed/?cr=1&amp;v=14&amp;wp=995&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2Fhome#%7B%22ci%22%3A0%2C%22os%22%3A548.5999999940395%2C%22ls%22%3A544.5%2C%22le%22%3A546.1999999880791%7D" allowtransparency='true' allowFullScreen={true} data-instgrm-payload-id="instagram-media-payload-0" style={{minHeight:"25rem", width:"100%", justifyContent:'center', scrolling:'none', overflow:'hidden'}} />
                </div>
                </main>
            </Container>
        </div>
    );
};

