import { CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



function FadeIn() {
    const [isVisible, setIsVisible] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const navigate = useNavigate();
    const { setNavBarVisable, language } = useUserContext();
    const { t } = useTranslation();

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });


    useEffect(() => {
        handleButtonClick();
        setNavBarVisable(true);
    }, []);


    const handleButtonClick = () => {
        setIsVisible(true);
    };

    useEffect(() => {
        const timeout = setTimeout(() => { setDialogOpen(true); setIsVisible(false); setAnimationFinished(true) }, 2000);
        return () => { clearTimeout(timeout) };
    }, []);


    const confirm = (answer) => {
        if (answer) {
            navigate('/home');
        }
        else {
            //exit app
            setNavBarVisable(false);
            navigate('/not-allowed');
        }
    }

    const handleClose = () => {
        setDialogOpen(false);
        navigate('/not-allowed');
    }

    useEffect(() => {
        console.log('language', language);
    }, [language]);





    return (
        <div>
            <div style={{ height: '20px' }}></div>
            <Dialog
                open={dialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                className={`dialogPaper ${language==='heb' && 'dialogContainerHeb'}`}
            >
                <DialogTitle className={`dialogTitle ${language ==='heb'&& 'hebTitle'}`}>{t("Confirm you are over 18")}</DialogTitle>
                <DialogContent>
                    <DialogContentText className={`dialogText ${language === 'heb' && 'hebText'}`} id="alert-dialog-slide-description">
                        {t('Are you Over 18? If not, you will be redirected to a different page.')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className='dialogButton' onClick={() => confirm(true)}>{t('Agree')}</Button>
                    <Button className='dialogButton' onClick={() => confirm(false)}>{t('Disagree')}</Button>
                </DialogActions>
            </Dialog>
            <CardMedia className={`fade-in-element ${isVisible ? 'visible' : 'notVisable'}`}>
                <img src={'https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2FSlice%201%20(3)%201.png?alt=media&token=d61940e9-da93-4590-87a7-756719d03ccd'} className="App-logo" alt="Lauren logo" />
                <p>
                    Lauren- wine bar in the valley
                </p>
            </CardMedia>

        </div>
    );
}

export default FadeIn;