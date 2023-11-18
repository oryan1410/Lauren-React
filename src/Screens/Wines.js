import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import RecipeReviewCard2 from '../HelpComponents/Card2';
import '../App.css';
import wines from '../WinesArr.json'
import { Grid } from '@mui/material';
import TextField from "@mui/material/TextField";
// import SearchAppBar from '../SearchAppBar';
import { Container } from 'react-bootstrap';

const Wines = () => {
    const [selectedDryness, setSelectedDryness] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isVisible, setIsVisable] = useState(false);
    const [displayWines, setDisplayWines] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [allWines, setAllWines] = useState([]);
    const [noneFound, setNoneFound] = useState(false);
    const [displayWines2, setDisplayWines2] = useState([]);

    useEffect(() => {
        setIsVisable(true);
        let arr = wines.map((wine) => {
            return <Card key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        }
        )
        setAllWines(arr);
        setDisplayWines(arr);

        let arr2 = wines.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        }
        )
        setDisplayWines2(arr2);

    }, []);

    useEffect(() => {
        if (searchQuery === "") {
            if (allWines.length !== 0) {
                setDisplayWines(allWines);
            }
            else {
                let arr = wines.map((wine) => {
                    return <Card key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                }
                )
                setAllWines(arr);
                setDisplayWines(arr);
            }
        } else {
            setNoneFound(false);
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
            console.log("asdasdw",arr4);
            if (arr4.length !== 0) {
                let arr = arr4.map((wine) => {
                    return <Card key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                }
                )
                setDisplayWines(arr);
                // setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
            }
            else {
                setDisplayWines([]);
                setNoneFound(true);
            }

        }

    }, [searchQuery]);

    const setSearch = (e) => {

        setSearchQuery(e);
    }

    const drynessOptions = [
        { key: 'dry', text: 'Dry', value: 'dry' },
        { key: 'sweet', text: 'Sweet', value: 'sweet' },
    ];

    const colorOptions = [
        { key: 'red', text: 'Red', value: 'red' },
        { key: 'white', text: 'White', value: 'white' },
        { key: 'rose', text: 'Rose', value: 'rose' },
        { key: 'bubble', text: 'Bubble', value: 'bubble' },
    ];

    // const countryOptions = [
    //     { key: 'france', text: 'France', value: 'france' },
    //     { key: 'italy', text: 'Italy', value: 'italy' },
    //     { key: 'spain', text: 'Spain', value: 'spain' },
    //     { key: 'usa', text: 'USA', value: 'usa' },
    // ];

    const filteredWines = wines.filter((wine) => {
        if (selectedDryness && wine.dryness !== selectedDryness) {
            return false;
        }
        if (selectedColor && wine.color !== selectedColor) {
            return false;
        }
        if (selectedCountry && wine.country !== selectedCountry) {
            return false;
        }
        return true;
    });


    return (
        <Container style={{ width: '100%', justifyContent: 'center' }}>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <h1>Wines</h1>
                <div className='searchInput'>
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
                                color: 'white',
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
                    />
                </div>
                <Grid container spacing={2} className='dishgridView' >

                    {/* {displayWines} */}
                   
                </Grid>
                {displayWines2}
                {noneFound && <h1>None Found</h1>}
            </div>
        </Container>
    );
};

export default Wines;
