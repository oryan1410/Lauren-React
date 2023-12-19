import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../styles/Footer.css'
import MapIcon from '@mui/icons-material/Map';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserContext } from '../UserContext';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer() {
const {t} = useTranslation();
const {language} = useUserContext();

  return (

    //         <div className='footer' style={{border: '1px solid black',display:'flex', flexDirection:'row', alignItems:'center'}}>
    //           <div className='footerTop'>
    //         <span>Find Us</span>
    //         <a href='https://www.instagram.com/lauren_winebar/'>  
    //         <img src='https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2Finstagram.png?alt=media&token=02bb7297-4298-471f-bee4-0815376d6bef' alt='img' style={{height:'20px'}} />  
    //          </a>
    //          <a target='_blank' href='https://ul.waze.com/ul?preview_venue_id=22872388.228527268.3889&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
    //                    <MapIcon className='footerIcon'/>
    //                 </a>              
    //                 <img className='footerWhastAppIcon' src='https://firebasestorage.googleapis.com/v0/b/wines--react-test.appspot.com/o/Icons-%20permitted%2FDigital_Inline_Green.svg?alt=media&token=267a73a1-813f-476b-9ad2-7b2b385a4033'/>
    //          </div>
    // <div className='footerBottom'>
    // <CopyrightIcon className='copyRightIcon' />
    // <span className='footerCopyrightText'> All rights reseved to Oryan Barnea, Tay Levi, Lauren wine bar</span>

    // </div>
    //         </div>
    <div className='footer'>
      <div className='footerTop'>
        {/* <div className='leftTop'>
          <span className='findUs'>Find Us</span>
          <a href='https://www.instagram.com/lauren_winebar/'>
            <img src='https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2Finstagram.png?alt=media&token=02bb7297-4298-471f-bee4-0815376d6bef' alt='img' style={{ height: '20px' }} />
          </a>
          <a target='_blank' href='https://ul.waze.com/ul?preview_venue_id=22872388.228527268.3889&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
            <MapIcon className='footerIcon' />
          </a>
          <img className='footerWhastAppIcon' src='https://firebasestorage.googleapis.com/v0/b/wines--react-test.appspot.com/o/Icons-%20permitted%2FDigital_Inline_Black.svg?alt=media&token=9db803ab-16b2-41d6-a6a4-2883054819d9' />
        </div> */}
        <div className='rightTop'>
          <span className={`warningDiv ${language==='heb' && 'hebWarning'}`}>{t('Warning')}</span>
        </div>
      </div>
      <div className='footerBottom'>
        <CopyrightIcon className='copyRightIcon' />
        <span className='footerCopyrightText'>All rights reseved to Oryan Barnea, Tay Levi, Lauren wine bar</span>
      </div>
    </div>
  );
}