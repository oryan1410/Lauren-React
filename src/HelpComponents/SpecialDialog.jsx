import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUserContext } from '../UserContext';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { set } from 'firebase/database';
import { Padding } from '@mui/icons-material';

export default function SpecialDialog(props) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {language,setFirstLoad} = useUserContext();

    const [dialogOpen, setDialogOpen]=useState(props.dialogOpen);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const confirm = (answer) => {
        if (answer) {
            setDialogOpen(false);
            props.setDisplayDialog('none');
            props.setOpenDialog(false);
            navigate('/cocktails');
            setFirstLoad(false);

        }
        else {
            //exit app
            navigate('/not-allowed');
            setDialogOpen(false);
            setFirstLoad(false);

        }
    }

    const handleClose = () => {
        setDialogOpen(false);
        props.setDisplayDialog('none');
        props.setOpenDialog(false);
        setFirstLoad(false);
    }




    return (


        <Dialog
            open={dialogOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            className={`${language === 'heb' && 'dialogContainerHeb'}`}
        >
            <CloseIcon className='closeIcon' style={{position:'absolute', left:0, border:'0.5px solid #000000',borderRadius:'15px', backgroundColor:'#000000', color:'#ffffff'}} onClick={handleClose} />
            <DialogTitle className={`dialogTitle ${language === 'heb' && 'hebTitle'}`}>{t("spritz special")}</DialogTitle>
                <img style={{width:'100%',padding:'5px', overflow:'hidden', height:'auto'}} src='https://firebasestorage.googleapis.com/v0/b/wines--react-test.appspot.com/o/Specials%2F%D7%A1%D7%A4%D7%99%D7%99%D7%A9%D7%9C%20%D7%97%D7%9E%D7%99%D7%A9%D7%99.jpg?alt=media&token=5a291b0d-a58e-4cb5-aaaa-bd5bed228003' />
            <DialogActions>
                <Button className='dialogButton' onClick={() => confirm(true)}>{t('To see the Specials')}</Button>
            </DialogActions>
        </Dialog>
    )
}