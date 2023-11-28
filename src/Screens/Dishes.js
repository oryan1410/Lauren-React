import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import RecipeReviewCard2 from '../HelpComponents/Card2';
import DishCard from '../HelpComponents/DishCard';
import '../App.css';
import '../styles/Wines.css'
import wines from '../WinesArr.json'
import dishes from '../DishesArr.json'
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
    const { redWines, whiteWines, roseWines, bubbleWines, countries, getFilters } = useUserContext();
    const [selectedDryness, setSelectedDryness] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isVisible, setIsVisable] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [allDishes, setAllDishes] = useState([]);
    const [noneFound, setNoneFound] = useState(false);
    const [displayDishes, setDisplayDishes] = useState([]);

    const [dropArrays, setDropArrays] = useState([]);

    //wine arrays for expansion panels
    const [redWinesArr, setRedWinesArr] = useState([]);
    const [whiteWinesArr, setWhiteWinesArr] = useState([]);
    const [roseWinesArr, setRoseWinesArr] = useState([]);
    const [bubbleWinesArr, setBubbleWinesArr] = useState([]);

    const [resetKey, setResetKey] = useState(0);
    const [filterReset, setFilterReset] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleValueChange(value, label) {
        console.log('Value changed to:', value);
        if (label === 'Dryness') {
            setSelectedDryness(value);
            if (value === 'Dry') {
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

    //useEffect to reset filters- after a filter has been chosen
    // useEffect(() => {
    //     setExpanded(false);
    //     setWhiteExpanded(false);
    //     setRoseExpanded(false);
    //     setBubbleExpanded(false);
    //     setFilterReset(true);

    //     // set all expanded to false

    //     // getFilters();
    // }, [selectedDryness, selectedCountry]);

    // //useEffect to filter wines according to selected filters
    // useEffect(() => {
    //     if (filterReset) {
    //         setFilterReset(false);
    //         setTimeout(() => {
    //             filterWines();
    //         }, 500);
    //     }
    // }, [filterReset]);


    // // filter wines according to selected filters
    // const filterWines = async () => {
    //     let arr = wines;
    //     if (selectedCountry !== '') {
    //         arr = arr.filter((wine) => wine.CountryName === selectedCountry);
    //         console.log('arr', arr);
    //     }
    //     if (selectedDryness !== '') {
    //         arr = arr.filter((wine) => wine.Dry_y_n_ === selectedDryness);
    //         console.log('arr', arr);
    //     }

    //     let red = [];
    //     let white = [];
    //     let rose = [];
    //     let bubble = [];

    //     arr.forEach((wine) => {
    //         if (wine.Type_R_W_B_ === 'R') {
    //             red.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
    //         }
    //         else if (wine.Type_R_W_B_ === 'W') {
    //             white.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
    //         }
    //         else if (wine.Type_R_W_B_ === 'Rose') {
    //             rose.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
    //         }
    //         else if (wine.Type_R_W_B_ === 'B') {
    //             bubble.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
    //         }

    //     }
    //     );

    //     setRedWinesArr(red);
    //     setWhiteWinesArr(white);
    //     setRoseWinesArr(rose);
    //     setBubbleWinesArr(bubble);
    // }

    useEffect(() => {
      
        setIsVisable(true);
        let dishArr= dishes.map((dish) => {
            return <DishCard key={dish.IdDish} dish={dish} title={dish.Name_Eng} image={dish.ImageUrl} />
        }
        );
        console.log('dishArr', dishArr);

        setRedWinesArr(dishArr);
        setWhiteWinesArr(dishArr);
        setRoseWinesArr(dishArr);
        setBubbleWinesArr(dishArr);
        setAllDishes(dishArr);
        setDisplayDishes(dishArr);


        setIsLoading(false); // Data has loaded, set loading state to false
    }, [dishes]);

    //create filters for dryness and country
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

    // get countries and sort filters
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

    // epxand more for wine category based on color
    const ExpandMore = styled((props) => {
  const { expand, header, ...other } = props;
  const [part1, part2] = header.split('||'); // Split the header into three parts
  return (
    <div {...other}>
      <div className='CategoryDivLeft'>{part1}</div>
      <div>||</div>
      <div className='CategoryDivRight'>{part2}</div>
    </div>
  );
})(({ theme, expand }) => ({
  display: 'flex', // Use Flexbox for alignment
  justifyContent: 'space-between', // Distribute the space evenly between the div elements
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

        //Search useeffect
    useEffect(() => {
        if (searchQuery === "") {
            setNoneFound(false);
            if (allDishes.length !== 0) {
                setDisplayDishes(allDishes);
            }
            else {
                let arr = dishes.map((dish) => {
                    return <DishCard key={dish.IdDish} dish={dish} title={dish.Name_Eng} image={dish.ImageUrl} />
                }
                )
                setAllDishes(arr);
                setDisplayDishes(arr);
            }
        } else {
            setNoneFound(false);
            console.log("searchQuery is not empty");
            //filter wines arr if name includes searchQuery
            let arr1 = dishes.filter((dish) => dish.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
            let arr2 = dishes.filter((dish) => dish.Name_Heb.includes(searchQuery));
            console.log(arr2);
            let arr4 = arr1.concat(arr2);
            if (arr4.length !== 0) {
               let arr = arr4.map((dish) => {
                    return <DishCard key={dish.IdDish} dish={dish} title={dish.Name_Eng} image={dish.ImageUrl} />
                }
                )
                setDisplayDishes(arr);
                // setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
            }
            else {
                setDisplayDishes([]);
                setNoneFound(true);
            }

        }

    }, [searchQuery]);

    //search function
    const setSearch = (e) => {
        console.log('setSearchWines');
        setSearchQuery(e);
    }


    return (
        <Container style={{ width: '100%', justifyContent: 'center' }}>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <SearchAppBar searchFunc={setSearch} />
                {/* <DropDown /> */}
                {/* {searchQuery ==='' && <Grid container className='dishgridView'>
                    {dropArrays}
                </Grid>}
                {searchQuery ==='' && <div className='resetButtonDiv'>
                    <Button className='resetButton' onClick={(e) => {sortFilters();e.target.blur()}} sx={{ color: 'white', backgroundColor: '#3c27c5', borderRadius: '16px!important', fontFamily: 'Urbanist', textTransform: 'none', '&:hover ': { backgroundColor: '#3c27c5' } }}>Reset</Button>
                </div>} */}

                {searchQuery === '' ? <div><ExpandMore
                    expand={expanded}
                    header='מנות פתיחה || Appetizers'
                    onClick={() => handleExpandClick('Red')}
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
                        header='מנות עיקריות || Main Course'
                        onClick={() => handleExpandClick('White')}
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
                        header='קינוחים || Desserts'
                        onClick={() => handleExpandClick('Rose')}
                        aria-expanded={expanded}
                        aria-label="show more"
                        className='wineCategory'
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={roseExpanded} timeout="auto" unmountOnExit>
                        {roseWinesArr}
                    </Collapse>
                </div> : displayDishes
                }

                {/* {displayDishes} */}
                {noneFound && <h1>None Found</h1>}
            </div>
        </Container>
    );
};

export default Dishes;
