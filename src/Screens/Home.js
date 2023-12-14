import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Home.css'
import { Grid } from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';
import { InstagramEmbed } from 'react-social-media-embed';
import { Link } from 'react-router-dom';

export default function Home(props) {

    const [isVisible, setIsVisible] = useState(false);
    const { getFilters } = useUserContext();

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
                <SearchAppBar />
                <Grid container spacing={2} >
                    <Grid item xs={5.8}  lg={2.8} className='homeGridItem'>
                        <Link to={{
                            pathname: "/wines",
                        }} state={{expanded: true}}>
                            <span>יינות אדומים</span><br /><span className='engButton'>Red Wines</span>
                        </Link>
                    </Grid>
                    <Grid item xs={5.8} lg={2.8} className='homeGridItem'>
                        <Link to={{
                            pathname: "/wines",
                        }} state={{whiteExpanded: true}}>
                            <span>יינות לבנים</span><br/><span className='engButton'>White Wines</span>
                        </Link>
                                            </Grid>
                    <Grid item xs={5.8} lg={2.8} className='homeGridItem'>
                        <Link to={{
                            pathname: "/wines",
                        }} state={{roseExpanded: true}}>
                             <span>יינות רוזה</span><br/> <span className='engButton'>Rose Wines</span>
                        </Link>
                    </Grid>
                    <Grid item xs={5.8} lg={2.8} className='homeGridItem'>
                        <Link to={{
                            pathname: "/wines",
                        }} state={{bubbleExpanded: true}}>
                             <span>יינות מבעבעים</span><br/> <span className='engButton'>Bubble Wines</span>
                        </Link>
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <InstagramEmbed url="https://www.instagram.com/lauren_winebar/" width={'100%'} />
                </div>
            </Container>
        </div>
    );
};

