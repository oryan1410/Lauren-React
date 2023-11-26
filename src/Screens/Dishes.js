import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import RecipeReviewCard2 from '../HelpComponents/Card2';
import '../App.css';
import '../styles/Wines.css'
import wines from '../WinesArr.json'
import { Grid } from '@mui/material';
import TextField from "@mui/material/TextField";
// import SearchAppBar from '../SearchAppBar';
import { Container } from 'react-bootstrap';
import DropDown from '../HelpComponents/DropDown';
import { Button } from '@mui/material';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';

import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Dishes = () => {
    const [expanded, setExpanded] = useState(false);
    const [whiteExpanded, setWhiteExpanded] = useState(false);
    const [roseExpanded, setRoseExpanded] = useState(false);
    const [bubbleExpanded, setBubbleExpanded] = useState(false);
    const {redWines, whiteWines, roseWines, bubbleWines,countries,getFilters } = useUserContext();
    const [selectedDryness, setSelectedDryness] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isVisible, setIsVisable] = useState(false);
    const [displayWines, setDisplayWines] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [allWines, setAllWines] = useState([]);
    const [noneFound, setNoneFound] = useState(false);
    const [displayWines2, setDisplayWines2] = useState([]);

    const [dropArrays, setDropArrays] = useState([]);

    //wine arrays for expansion panels
    const [redWinesArr, setRedWinesArr] = useState([]);
    const [whiteWinesArr, setWhiteWinesArr] = useState([]);
    const [roseWinesArr, setRoseWinesArr] = useState([]);
    const [bubbleWinesArr, setBubbleWinesArr] = useState([]);

    const [resetKey, setResetKey] = useState(0);
    const [filterReset, setFilterReset] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    function handleValueChange(value, label) {
        console.log('Value changed to:', value);
        if (label === 'Dryness') {
            setSelectedDryness(value);
            if (value === 'Dry'){
            setSelectedDryness('Y');
            }
            else {
                setSelectedDryness('N');
            }
            //console.log('arr', arr);
        }
        else if (label === 'Country') {
            setSelectedCountry(value);
        }


    };

    useEffect(() => {
        console.log('useEffect');
        setExpanded(false);
        setWhiteExpanded(false);
        setRoseExpanded(false);
        setBubbleExpanded(false); 
        setFilterReset(true);
        
        // set all expanded to false
       
        // getFilters();
    }, [selectedDryness, selectedCountry]);

    useEffect(() => {
        if(filterReset){
            filterWines();
            setFilterReset(false);
        }
    }, [filterReset]);

    const filterWines = async () => {
        let arr=wines;
        if (selectedCountry !== '') {
            arr = arr.filter((wine) => wine.CountryName === selectedCountry);
            console.log('arr', arr);
        }
        if (selectedDryness !== '') {
            arr = arr.filter((wine) => wine.Dry_y_n_ === selectedDryness);
            console.log('arr', arr);
        }

        // let red = arr.filter((wine) => wine.Type_R_W_B_ === 'R');

        // setRedWinesArr(red);
        // let white = arr.filter((wine) => wine.Type_R_W_B_ === 'W');
        // whiteWinesArr(white);
        // let rose = arr.filter((wine) => wine.Type_R_W_B_ === 'Rose');
        // setRoseWinesArr(rose);
        // let bubble = arr.filter((wine) => wine.Type_R_W_B_ === 'B');
        // setBubbleWinesArr(bubble);

        // one loop that puts the returned wines into the right array
        let red = [];
        let white = [];
        let rose = [];
        let bubble = [];

        arr.forEach((wine) => {
            if (wine.Type_R_W_B_ === 'R') {
                red.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }
            else if (wine.Type_R_W_B_ === 'W') {
                white.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }
            else if (wine.Type_R_W_B_ === 'Rose') {
                rose.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }
            else if (wine.Type_R_W_B_ === 'B') {
                bubble.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }

        }
        );

        setRedWinesArr(red);
        setWhiteWinesArr(white);
        setRoseWinesArr(rose);
        setBubbleWinesArr(bubble);
    }

    useEffect(() => {
        if (!wines.length) {
            // Data has not loaded yet, exit the useEffect
            return;
        }    
        setIsVisable(true);
        let arr = wines.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        });
    
        let redArr = redWines.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        });

        let whiteArr = whiteWines.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        });

        let roseArr = roseWines.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        }
        );

        let bubbleArr = bubbleWines.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        }
        );
        setRedWinesArr(redArr);
        setWhiteWinesArr(whiteArr);
        setRoseWinesArr(roseArr);
        setBubbleWinesArr(bubbleArr);
        setAllWines(arr);
        setDisplayWines2(arr);
        
            sortFilters();
        
        setIsLoading(false); // Data has loaded, set loading state to false
    }, [wines, redWines, whiteWines, roseWines, bubbleWines]);


    const sortFilters = async () => {
        console.log('getFilters');
        setSelectedDryness('');
        setSelectedColor('');
        setSelectedCountry('');
        setResetKey(prevKey => prevKey + 1); // increment the key
        setDropArrays([
            <DropDown key={resetKey + '0'} label='Dryness' options={['Dry', 'Half-Sweet']} setValue={handleValueChange} selected={''} />,
            <DropDown key={resetKey + '1'} label='Country' options={countries} setValue={handleValueChange} selected={''} />
        ]);
    }

    useEffect(() => {
        if (countries.length === 0) {
            console.log('countries', countries);
            getFilters();
        }
        else {
            console.log('countries', countries);
        sortFilters();
        }
    }, [countries]);

    const ExpandMore = styled((props) => {
        const { expand, header, ...other } = props;
        return <div {...other}>{header}</div>;
    })(({ theme, expand }) => ({
        
        marginLeft: '0 auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

      const handleExpandClick = (type) => {
        if (type === 'Red') {
            setExpanded(!expanded);
        }
        else if (type === 'White') {
            setWhiteExpanded(!whiteExpanded);
        }
        else if (type === 'Rose') {
            setRoseExpanded(!roseExpanded);
        }
        else if (type === 'Bubble') {
            setBubbleExpanded(!bubbleExpanded);
        }
      };


    useEffect(() => {
        console.log('dropArrays', dropArrays);
    }
        , [dropArrays])

    useEffect(() => {
        if (searchQuery === "") {
            setNoneFound(false);
            if (allWines.length !== 0) {
                setDisplayWines2(allWines);
            }
            else {
                let arr = wines.map((wine) => {
                    return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                }
                )
                setAllWines(arr);
                setDisplayWines2(arr);
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
            if (arr4.length !== 0) {
                let arr = arr4.map((wine) => {
                    return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                }
                )
                setDisplayWines2(arr);
                // setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
            }
            else {
                setDisplayWines2([]);
                setNoneFound(true);
            }

        }

    }, [searchQuery]);

    const setSearch = (e) => {
        console.log('setSearchWines');
        setSearchQuery(e);
    }

    const drynessOptions = [
        { key: 'dry', text: 'Dry', value: 'dry' },
        { key: 'half- sweet', text: 'Half-Sweet', value: 'Half-sweet' },
    ];

    const colorOptions = [
        { key: 'red', text: 'Red', value: 'red' },
        { key: 'white', text: 'White', value: 'white' },
        { key: 'rose', text: 'Rose', value: 'rose' },
        { key: 'bubble', text: 'Bubble', value: 'bubble' },
    ];

    const countryOptions = [
        { key: 'france', text: 'France', value: 'france' },
        { key: 'italy', text: 'Italy', value: 'italy' },
        { key: 'spain', text: 'Spain', value: 'spain' },
        { key: 'usa', text: 'USA', value: 'usa' },
    ];

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
                {/* <div className='searchInput'>
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
                </div> */}
                <SearchAppBar searchFunc={setSearch} />
                <Grid container className='dishgridView'>
                    {dropArrays}
                </Grid>
                <div className='resetButtonDiv'>
                    <Button className='resetButton' onClick={() => getFilters()} sx={{ color: 'white', backgroundColor: '#3c27c5', borderRadius: '16px!important', fontFamily: 'Urbanist', textTransform: 'none', '&:hover ': { backgroundColor: 'green' } }}>Reset</Button>
                </div>
                {/* <DropDown /> */}
                {searchQuery===''? <div><ExpandMore
                    expand={expanded}
                    header='Red Wines'
                    onClick={()=> handleExpandClick('Red')}
                    aria-expanded={expanded}
                    aria-label="show more"
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {redWinesArr}
                </Collapse>
                <ExpandMore
                    expand={whiteExpanded}
                    header='White Wines'
                    onClick={()=> handleExpandClick('White')}
                    aria-expanded={expanded}
                    aria-label="show more"
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={whiteExpanded} timeout="auto" unmountOnExit>
                        {whiteWinesArr}
                </Collapse>
                <ExpandMore
                    expand={roseExpanded}
                    header='Rose Wines'
                    onClick={()=> handleExpandClick('Rose')}
                    aria-expanded={expanded}
                    aria-label="show more"
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={roseExpanded} timeout="auto" unmountOnExit>
                        {roseWinesArr}
                </Collapse>
                <ExpandMore
                    expand={bubbleExpanded}
                    header='Bubble Wines'
                    onClick={()=> handleExpandClick('Bubble')}
                    aria-expanded={expanded}
                    aria-label="show more"
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={bubbleExpanded} timeout="auto" unmountOnExit>
                        {bubbleWinesArr}
                </Collapse> </div>: displayWines2
                }
                
                {/* {displayWines2} */}
                {noneFound && <h1>None Found</h1>}
            </div>
        </Container>
    );
};

export default Dishes;
