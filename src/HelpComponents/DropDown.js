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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';


export default function BasicSelect({ label, options, setValue,selected }) {
  const [age, setAge] = React.useState('');
  const [labelText, setLabelText] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log("ss",event);
    setValue(event.target.value, label);
  };
  

  useEffect(() => {
    console.log("ss",selected);
    setAge(selected);
  }
  , [selected])

  const reset = () => {
    setAge('');
    setValue('');
  }

  return (
    <Grid item xs={5.9}>
      <FormControl fullWidth sx={ {
          "&.MuiOutlinedInput-input:hover": {
            border: "2px solid green"
          }
        }}>
        <InputLabel id="demo-simple-select-label" className='inputLabel'>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root.Mui-selected": {
                  backgroundColor: "yellow"
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "pink"
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "red"
                }
              }
            }
          }}
          inputProps={{ 'aria-label': 'Without label'}}
          labelprops={{ 'aria-label': 'Without label' }}
          onChange={(e)=>{handleChange(e)}}
          onClose={(e)=>{;console.log("saass",selected); 
          setTimeout(() => {
            document.activeElement.blur();
          }, 0);
        }}
          sx={{color:'white',backgroundColor:'#3c27c5', borderRadius:'16px!important', fontFamily:'Urbanist',  "&:hover": {
            "&& fieldset": {
              border: "2px solid #1976d2"
            }
          }}}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} className='menuItem'>{option}</MenuItem>
          ))
          }
        </Select>
      </FormControl>
    </Grid>
  );
}

