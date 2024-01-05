import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import TempAlcCard from '../HelpComponents/TempAlcCard';
import AlcoholCard from '../HelpComponents/AlcoholCard';
import BeerCard from '../HelpComponents/BeerCard';
import RecipeReviewCard2 from '../HelpComponents/Card2';
import DishCard from '../HelpComponents/DishCard';
import '../App.css';
import '../styles/Wines.css'
import dishes from '../DishesArr.json'
// import SearchAppBar from '../SearchAppBar';
import { Container } from 'react-bootstrap';
import DropDown from '../HelpComponents/DropDown';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';

import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const AlcoholMain = () => {
    const [expanded, setExpanded] = useState(false);
    const [americanExpanded, setAmericanExpanded] = useState(false);
    const [smokedExpanded, setSmokedExpanded] = useState(false);
    const [coniacExpanded, setConiacExpanded] = useState(false);
    const [rumExpanded, setRumExpanded] = useState(false);
    const [ginExpanded, setGinExpanded] = useState(false);
    const [taqilaExpanded, setTaquilaExpanded]= useState(false)
    const [apperetivoExpanded, setApperetivoExpanded] = useState(false);
    const [anisExpanded, setAnisExpanded] = useState(false);
    const [vodkaExpanded, setVodkaExpanded] = useState(false);
    const [beerExpanded, setBeerExpanded] = useState(false);
    const [cocltailExpanded, setCocktailExpanded] = useState(false);
    const { alcoholArr, whiskeyArr, americanArr, smokedArr, coniacArr, vodkaArr, rumArr, ginArr, taquillaArr, apperativoArr, anisArr, cocktailsArr,beerArr, countries, getFilters } = useUserContext();
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

    useEffect(() => {
        setIsVisable(true);
        let dishArr = dishes.map((dish) => {
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
            setAmericanExpanded(!americanExpanded);
        }
        else if (type === 'Rose') {
            setSmokedExpanded(!smokedExpanded);
        }
        else if (type === 'Bubble') {
            setConiacExpanded(!coniacExpanded);
        }
        else if (type === 'Rum'){
            setRumExpanded(!rumExpanded);
        }
        else if (type==='Gin'){
            setGinExpanded(!ginExpanded)
        }
        else if (type==='Tequila'){
            setTaquilaExpanded(!taqilaExpanded)
        }
        else if (type==='Apperativo'){
            setApperetivoExpanded(!apperetivoExpanded)
        }
        else if (type==='Anis'){
            setAnisExpanded(!anisExpanded)
        }
        else if (type==='Vodka'){
            setVodkaExpanded(!vodkaExpanded)
        }
        else if (type==='Beer'){
            setBeerExpanded(!beerExpanded)
        }
        else if (type==='Cocktail'){
            setCocktailExpanded(!cocltailExpanded)
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
                let arr = alcoholArr.map((alcohol) => {
                    return <AlcoholCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
                }
                )
                setAllDishes(arr);
                setDisplayDishes(arr);
            }
        } else {
            setNoneFound(false);
            console.log("searchQuery is not empty");
            console.log(searchQuery)
            //filter wines arr if name includes searchQuery
            let arr1 = alcoholArr.filter((alcohol) => alcohol.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
            let arr2 = alcoholArr.filter((alcohol) => alcohol.Name_Heb.includes(searchQuery));
            console.log(arr2);
            let arr4 = arr1.concat(arr2);
            arr4 = [...new Set(arr4)]
            if (arr4.length !== 0) {
                let arr = arr4.map((alcohol) => {
                    return <AlcoholCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
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
                {searchQuery ===''? <div>
                <ExpandMore
                    expand={expanded}
                    header={'וויסקי||whiskey'}
                    aria-expanded={expanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('Red')}
                    className='wineCategory'

                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {whiskeyArr.map((whiskey) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={whiskey.IdAlc} alcohol={whiskey} title={whiskey.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                    expand={americanExpanded}
                    header={'אמריקאיים||American'}
                    aria-expanded={americanExpanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('White')}
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={americanExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {americanArr.map((american) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={american.IdAlc} alcohol={american} title={american.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                    expand={smokedExpanded}
                    header={'מעושנים||Smoked'}
                    aria-expanded={smokedExpanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('Rose')}
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={smokedExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {smokedArr.map((smoked) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={smoked.IdAlc} alcohol={smoked} title={smoked.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                    expand={coniacExpanded}
                    header={'קוניאק||Coniac'}
                    aria-expanded={coniacExpanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('Bubble')}
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={coniacExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {coniacArr.map((coniac) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={coniac.IdAlc} alcohol={coniac} title={coniac.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                    expand={rumExpanded}
                    header={'רום||Rum'}
                    aria-expanded={rumExpanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('Rum')}
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={rumExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {rumArr.map((rum) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                expand={ginExpanded}
                header={`ג'ין||Gin`}
                aria-expanded={ginExpanded}
                aria-label={'show more'}
                onClick={() => handleExpandClick('Gin')}
                className='wineCategory'
            >
                <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={ginExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {ginArr.map((rum) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                expand={taqilaExpanded}
                header={`טקילה || Tequila`}
                aria-expanded={taqilaExpanded}
                aria-label={'show more'}
                onClick={() => handleExpandClick('Tequila')}
                className='wineCategory'
            >
                <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={taqilaExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {taquillaArr.map((rum) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                expand={apperetivoExpanded}
                header={`אפריטיף || aperitif`}
                aria-expanded={apperetivoExpanded}
                aria-label={'show more'}
                onClick={() => handleExpandClick('Apperativo')}
                className='wineCategory'
            >
                <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={apperetivoExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {apperativoArr.map((rum) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore 
                expand={anisExpanded}
                header={`אניס || Anis`}
                aria-expanded={anisExpanded}
                aria-label={'show more'}
                onClick={() => handleExpandClick('Anis')}
                className='wineCategory'
            >
                <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={anisExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {anisArr.map((rum) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                expand={vodkaExpanded}
                header={`וודקה || Vodka`}
                aria-expanded={vodkaExpanded}
                aria-label={'show more'}
                onClick={() => handleExpandClick('Vodka')}
                className='wineCategory'
            >
                <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={vodkaExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {vodkaArr.map((rum) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                {/* <ExpandMore
                expand={beerExpanded}
                header={`בירה || Beer`}
                aria-expanded={beerExpanded}
                aria-label={'show more'}
                onClick={() => handleExpandClick('Beer')}
                className='wineCategory'
            >
                <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={beerExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {beerArr.map((rum) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <BeerCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse> */}
                </div>:
                displayDishes
                }
                            
                            </div>
        </Container>
    );
};

export default AlcoholMain;
