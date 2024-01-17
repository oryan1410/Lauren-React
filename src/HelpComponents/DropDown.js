// import React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { Button } from '@mui/material';

// export default function BasicSelect({ label, options, setValue,selected }) {
//   const [age, setAge] = React.useState('');
//   const [labelText, setLabelText] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//     setValue(event.target.value);
//   };

//   const reset = () => {
//     setAge('');
//     setValue('');
//   }

//   return (
//     <Box sx={{ minWidth: 120 }} xs={6} sm={4} lg={3}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label" className='inputLabel'>{label}</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={selected}
//           label="Age"
//           inputProps={{ 'aria-label': 'Without label' }}
//           labelprops={{ 'aria-label': 'Without label' }}
//           onChange={handleChange}
//           sx={{color:'white',backgroundColor:'#3c27c5', borderRadius:'16px!important', fontFamily:'Urbanist', '&:hover fieldset': {}}}
//         >
//           {options.map((option) => (
//             <MenuItem value={option} className='menuItem'>{option}</MenuItem>
//           ))
//           }
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }


import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import { useUserContext } from '../UserContext';


export default function BasicSelect({ label, options, setValue,selected }) {
  const [age, setAge] = React.useState('');

  const {language} = useUserContext();

  const handleChange = (event) => {
    setAge(event.target.value);
    setValue(event.target.value, label);
  };
  

  useEffect(() => {
    setAge(selected);
  }
  , [selected])

  const getLabel = () => {
    if (language==='heb') {
      if (label==='Color') {
        return 'צבע';
      }
      if (label==='Country') {
        return 'מדינה';
      }
      if (label==='Region') {
        return 'אזור';
      }
      if (label==='Grape') {
        return 'ענבים';
      }
      if (label==='Kosher') {
        return 'כשר';
      }
      if (label==='Price') {
        return 'מחיר';
      }
      if (label==='Year') {
        return 'שנה';
      }
      if (label==='Dryness') {
        return 'רמת יובש';
      }
      if (label==='Type') {
        return 'סוג מנה';
      }
    }
    else {
      return label;
    }
  }


  return (
    <Grid item xs={5.9} aria-label={`Press to select ${label}`} tabIndex={0} >
      <FormControl className={`${language==='heb' && 'hebDropDown'}`} fullWidth sx={ {
          "&.MuiOutlinedInput-input:hover": {
            border: "2px solid #fff"
          }
        }}>
        <select
          label={language!=='heb'?`בחר ${label}`:`Select ${label}`}
          name={label}
          value={age}
          className='selectDropDown'
          onChange={(e)=>{handleChange(e)}}
          placeholder={`Select ${label}`}
          onClose={(e)=>{
          setTimeout(() => {
            document.activeElement.blur();
          }, 0);
        }}
        >
          <option disabled value=""className={`menuItem ${language==='heb' && 'hebMenuItem'}`}>{language==='heb'?`בחר ${getLabel()}`:`Select ${getLabel()}`}</option>
          {options.map((option) => (
            <option key={option} value={option} className={`menuItem ${language==='heb' && 'hebMenuItem'} `}>{option}</option>
          ))
          }
        </select>
      </FormControl>
    </Grid>
  );
}

