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
            navigate('/aboutUs');
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
            className={`specialDialog ${language === 'heb' && 'dialogContainerHeb'}`}
        >
            <CloseIcon className='closeIcon' style={{position:'absolute', left:0, border:'0.5px solid #000000',borderRadius:'15px', backgroundColor:'#000000', color:'#ffffff'}} onClick={handleClose} />
                <img style={{width:'100%', overflow:'hidden', height:'auto'}} src='https://firebasestorage.googleapis.com/v0/b/wines--react-test.appspot.com/o/Specials%2FWhatsApp%20Image%202024-06-27%20at%2019.46.42.jpeg?alt=media&token=b92c383c-4226-4281-91bd-e7a48334e0dd' />
            {/* <DialogActions className='specialActions' style={{marginBottom:'0px'}}>
                <Button className='specialdialogButton' onClick={() => confirm(true)}>{'למעבר לתפריט'}</Button>
            </DialogActions> */}
        </Dialog>
    )
}