import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import './App.css'
import { useState, useEffect } from 'react';
import wines from './WinesArr.json'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchAppBar(props) {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [arr, setArr] = useState(wines);

  const setSearch = (e) => {
    setSearchText(e);
    setSearchQuery(e);
    props.searchFunc(e);
  }



  const handleClear = () => {
    setSearchText('');
    setSearchQuery('');
    props.searchFunc('');
  };


  return (
    <search>
    <div className='searchInput' aria-label={`Search ${props.label}`}>
      <input type="text"
        id="search-bar"
        alt={`Search ${props.label}`}
        className="textInput center-placeholder"
        onInput={(e) => {
          setSearch(e.target.value);
        }}
        value={searchText}
        placeholder={`search ${props.label}`}
        aria-label={`Search ${props.label}`}        
      
      />
            {searchQuery!=='' ? 
        <div className='clearButton' onClick={handleClear}>
          <ClearIcon alt='press to clear text' />
        </div>:
         <div className='searchButton'> <SearchIcon alt='magnifying glass icon' className='searchIcon' /> </div>
           
    }
    </div>
    </search>
  );
}