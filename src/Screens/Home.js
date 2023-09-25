import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import '../styles/Home.css'
import { Grid } from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';

export default function Home(props) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (props.isVisible) {
            setIsVisible(true);
        }
    }, [isVisible]);


    return (
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
            <Container style={{width:'100%'}}>
                <SearchAppBar />
                <Grid container spacing={2} >
                    <Grid item xs={6} sm={4} lg={3}>
                        <img src="https://via.placeholder.com/150" alt="Sale 1" className="grid-item" />
                    </Grid>
                    <Grid item xs={6} sm={4} lg={3}>
                        <img src="https://via.placeholder.com/150" alt="Sale 1" className="grid-item" />
                    </Grid>
                    <Grid item xs={6} sm={4} lg={3}>
                        <img src="https://via.placeholder.com/150" alt="Sale 1" className="grid-item" />
                    </Grid>
                    <Grid item xs={6}sm={4} lg={3} className="grid-item">
                        <img src="https://via.placeholder.com/150" alt="Sale 1" className="grid-item" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

