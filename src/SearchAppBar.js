import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import './App.css'
import { useState, useEffect } from 'react';
import wines from './WinesArr.json'


export default function SearchAppBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [arr, setArr] = useState(wines);

  const setSearch = (e) => {
    setSearchText(e);
    setSearchQuery(e);
  }

  useEffect(() => {
    if (searchQuery === "") {
      setArr(wines);
    } else {
      console.log("searchQuery is not empty");
      //filter wines arr if name includes searchQuery
      let arr1 = wines.filter((wine) => wine.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
      console.log(arr1);
      setArr(arr1);
      // setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
    }
  }, [searchQuery]);

  return (
    <>
      <TextField
        id="search-bar"
        className="textInput"
        onInput={(e) => {
          setSearch(e.target.value);
        }}
        label="What are you looking for?"
        placeholder="Search..."
        type="search"
        InputLabelProps={{ className: 'inputLabel' }}
        InputProps={{
          sx: {
            color:'white',
            borderRadius: '16px!important',
            fontFamily: 'Urbanist',
            '&:hover fieldset': {
              border: '2px solid white!important',
              borderRadius: '16px!important',
            },
            '&:focus-within fieldset, &:focus-visible fieldset': {
              border: '2px solid white!important',
              borderRadius: '16px!important',
            },
          },
        }}
                
        sx={{ width: '100%', borderRadius: '16px', marginBlock: '1rem', '&:focus-within fieldset, &:focus-visible fieldset': { border: '2px solid white!important', borderRadius: '16px!important'} }}
      />

    </>
  );
}