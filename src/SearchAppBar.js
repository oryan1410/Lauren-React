import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import './App.css'
import { useState, useEffect } from 'react';
import wines from './WinesArr.json'
import ClearIcon from '@mui/icons-material/Clear';


export default function SearchAppBar(props) {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [arr, setArr] = useState(wines);

  const setSearch = (e) => {
    setSearchText(e);
    setSearchQuery(e);
    props.searchFunc(e);
  }

  useEffect(() => {
    if (searchQuery === "") {
      setArr(wines);
    } else {
      console.log("searchQuery is not empty");
      //filter wines arr if name includes searchQuery
      let arr1 = wines.filter((wine) => wine.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
      let arr2 = wines.filter((wine) => wine.Name_Heb.includes(searchQuery));
      console.log(arr2);
      let arr3 = arr1.concat(arr2);
      let arr4 = arr3.filter((wine, index, self) =>
        index === self.findIndex((t) => (
          t.Id === wine.Id
        ))
      )
      console.log(arr4);
      setArr(arr4);
      // setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
    }
  }, [searchQuery]);

  const handleClear = () => {
    setSearchText('');
    setSearchQuery('');
    props.searchFunc('');
  };


  return (
    <div className='searchInput'>
      <TextField
        id="search-bar"
        className="textInput center-placeholder"
        onInput={(e) => {
          setSearch(e.target.value);
        }}
        value={searchText}
        placeholder="WHAT ARE YOU LOOKING FOR?"
        InputProps={{
          sx: {
            color: 'white',
            borderRadius: '16px!important',
            fontFamily: '"Urbanist", "IBM Plex Sans Hebrew"',
            fontWeight:400,
            '&:hover fieldset': {
              border: '0px!important',
              borderRadius: '16px!important',
            },
            '& input::placeholder': {
              color: '#FFF',
            },
          },
        }}        
      />
            {searchQuery!=='' && (
        <div className='clearButton' onClick={handleClear}>
          <ClearIcon />
        </div>
      )}
    </div>
  );
}