import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import './App.css'
import { useState, useEffect } from 'react';
import wines from './WinesArr.json'

const SearchBar = ({ setSearchQuery }) => (
  <>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="What are you looking for?"
      placeholder="Search..."
      type="search"
      InputLabelProps={{
        sx: {
          color: 'white',
          '&.Mui-focused': { color: 'white' },
        }
      }}
      InputProps={{
        sx: {
          color: 'white',
          borderRadius: '16px!important',
          borderWidth: 0,
          '&:hover fieldset': {
            border: '4px solid white!important',
            borderRadius: '16px!important',
          },
          '&:focus-within fieldset, &:focus-visible fieldset': {
            border: '4px solid red!important',
            borderRadius: '16px!important',
          },
        },
      }}
      sx={{ width: '100%', bgcolor: '#bcd516', borderRadius: '16px', borderWidth: 0, '&:hover': { backgroundColor: 'green', }, }}
    />
    <IconButton type="submit" aria-label="search">
    </IconButton>
  </>
);

export default function SearchAppBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const [arr, setArr] = useState(wines);


  useEffect(() => {
    if (searchQuery === "") {
      setArr(wines);
      console.log("searchQuery is empty");
      console.log(wines);
    } else {
      setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
    }
  }, [searchQuery]);

  return (
    <SearchBar />
  );
}