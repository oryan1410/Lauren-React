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
                    <Grid item xs={5.8} sm={3.5} lg={2.8} className='homeGridItem'>
                        <Link to={{
                            pathname: "/wines",
                        }} state={{expanded: true}}>
                            יינות אדומים<br />Red Wines
                        </Link>
                    </Grid>
                    <Grid item xs={5.8} sm={3.5} lg={2.8} className='homeGridItem'>
                        <Link to={{
                            pathname: "/wines",
                        }} state={{whiteExpanded: true}}>
                            יינות לבנים<br/>White Wines
                        </Link>
                                            </Grid>
                    <Grid item xs={5.8} sm={3.5} lg={2.8} className='homeGridItem'>
                        <Link to={{
                            pathname: "/wines",
                        }} state={{roseExpanded: true}}>
                            יינות רוזה<br/>Rose Wines
                        </Link>
                    </Grid>
                    <Grid item xs={5.8} sm={3.5} lg={2.8} className='homeGridItem'>
                        <Link to={{
                            pathname: "/wines",
                        }} state={{bubbleExpanded: true}}>
                            יינות מבעבעים<br/>Bubble Wines
                        </Link>
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/Cz4GyLlIAzt/" width={'100%'} />
                </div>
            </Container>
        </div>
    );
};

