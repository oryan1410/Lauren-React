import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import '../styles/Home.css'
import { Grid } from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';

export default function AboutUs(props) {

    const [isVisible, setIsVisible] = useState(false);
    const {getFilters} = useUserContext();

    useEffect(() => {
        setIsVisible(true);

      }, []);



    return (
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
        <p>About Us</p></div>
    );
};

