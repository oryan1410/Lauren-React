import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import RecipeReviewCard2 from '../HelpComponents/Card2';
import DishCard from '../HelpComponents/DishCard';
import '../App.css';
import '../styles/Wines.css'
import '../styles/Dishes.css'
import dishes from '../DishesArr.json'
// import SearchAppBar from '../SearchAppBar';
import { Container } from 'react-bootstrap';
import DropDown from '../HelpComponents/DropDown';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';

import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TempDishCard from '../HelpComponents/TempDishCard';




const Dishes = () => {
    const [expanded, setExpanded] = useState(false);
    const [whiteExpanded, setWhiteExpanded] = useState(false);
    const [roseExpanded, setRoseExpanded] = useState(false);
    const [bubbleExpanded, setBubbleExpanded] = useState(false);
    const { redWines, whiteWines, roseWines, bubbleWines, countries, language } = useUserContext();
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
    const [appetizersArr, setAppetizersArr] = useState([]);

    const [whiteWinesArr, setWhiteWinesArr] = useState([]);
    const [roseWinesArr, setRoseWinesArr] = useState([]);
    const [bubbleWinesArr, setBubbleWinesArr] = useState([]);

    const [resetKey, setResetKey] = useState(0);
    const [filterReset, setFilterReset] = useState(false);
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

    useEffect(() => {
        setIsVisable(true);
        let appetizersArr = dishes.filter((dish) => dish.dishType === 'Appetizer');
        let dishArr = dishes.map((dish) => {
            // return <DishCard key={dish.IdDish} dish={dish} title={dish.Name_Eng} image={dish.ImageUrl} />
            // return <div className='dishCardDiv' key={dish.IdDish}>
            //     <div className='dishTitlesDiv'>
            //         <span className='dishCardTitle'>{dish.Name_Eng}</span>
            //         <span className='dishCardTitle hebTitle'>{dish.Name_Heb}</span>
            //     </div>
            //     <div className='line'></div>
            //     {language === 'heb' ? <span className='dishCardSubtitle hebSubtitle'>{dish.Description_Heb}</span> : <span className='dishCardSubtitle'>{dish.Description_Eng}</span>}
            //     <div className='line'></div>
            //     <div className='attributesDiv'>
            //         <div className='priceDiv'>
            //             <span className='dishCardSubtitle'>{dish.CPrice}₪</span>
            //         </div>
            //         <div className='kosherDiv'>
            //             <span className='kosherText'>{!dish.Kosher && 'Not '}Kosher</span>
            //         </div>
            //         <div className='typeDiv'>
            //             <span className='kosherText'>{dish.dishType}</span>
            //         </div>
            //     </div>


            // </div>

            if(dish.dishType === 'Appetizer'
            )
            return <TempDishCard key={dish.IdDish} dish={dish} />
        }
        );

        appetizersArr = appetizersArr.map((dish) => {
            return <TempDishCard key={dish.IdDish} dish={dish} />
        }
        )
        console.log('dishArr', dishArr);
        setAppetizersArr(appetizersArr);
        setDisplayDishes(dishArr);
    }, [dishes, language]);

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
                        {appetizersArr}
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
