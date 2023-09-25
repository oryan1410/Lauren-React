import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import './App.css'
import { useState, useEffect } from 'react';
import wines from './WinesArr.json'

const SearchBar = ({setSearchQuery}) => (
  <>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="What are you looking for?"
      variant="outlined"
      placeholder="Search..."
      type="search"
      sx={{ width: '100%', bgcolor: '#bcd516' }}
    />
    <IconButton type="submit" aria-label="search">
    </IconButton>
    </>
);

export default function SearchAppBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const [arr, setArr] = useState(wines);


  useEffect (() => {
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