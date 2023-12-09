import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

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

const defaultTheme = createTheme();

export default function Footer() {
  return (
       
        <div style={{border: '1px solid black',display:'flex', flexDirection:'row'}}>
        <span>Find Us</span>
        <a href='https://www.instagram.com/lauren_winebar/'>  
        <img src='https://firebasestorage.googleapis.com/v0/b/wines-6e89f.appspot.com/o/Logos%2Finstagram.png?alt=media&token=02bb7297-4298-471f-bee4-0815376d6bef' alt='img' style={{height:'30px', padding:'5px'}} />  
         </a>
        </div>
    );
}