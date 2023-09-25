import React, { useEffect } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import '../App.css';
import { Grid} from '@mui/material';
import { useState } from 'react';
import SearchAppBar from '../SearchAppBar';

export default function Home(props) {

    const [isVisible, setIsVisible] = useState(false);

    //fade in in first time you enter page
    //fade out when you click on a link
    //fade in when you click on a link
    //fade out when you click on a link
    //fade in when you click on a link

    useEffect(() => {
        if (props.isVisible) {
            setIsVisible(true);
        }
    }, [isVisible]);


    return (
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
            <Navbar bg="light" expand="xxl" fixed='top' collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">My App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#burger">Burger</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container style={{width:'100%'}}>
                <SearchAppBar />
                <Grid container spacing={3} >
                    <Grid item xs={6} sm={3} >
                        <img src="https://via.placeholder.com/150" alt="Sale 1" className="grid-item" />
                    </Grid>
                    <Grid item xs={6} sm={3} >
                        <img src="https://via.placeholder.com/150" alt="Sale 1" className="grid-item" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <img src="https://via.placeholder.com/150" alt="Sale 1" className="grid-item" />
                    </Grid>
                    <Grid item xs={6} sm={3} className="grid-item">
                        <img src="https://via.placeholder.com/150" alt="Sale 1" className="grid-item" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

