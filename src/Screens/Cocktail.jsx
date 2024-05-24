import React, { useState, useEffect } from 'react';
import TempDrinkCard from '../HelpComponents/TempDrinkCard';
import '../App.css';
import '../styles/Wines.css'
// import SearchAppBar from '../SearchAppBar';
import { Container } from 'react-bootstrap';
import DropDown from '../HelpComponents/DropDown';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';

import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import SpritzCard from '../HelpComponents/ShpritzCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '../HelpComponents/Collapse';



const Cocktails = () => {
    const {t} = useTranslation();
    const {cocktailsArr, countries, isLoading, spritzArr } = useUserContext();
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


    const [resetKey, setResetKey] = useState(0);
    const [filterReset, setFilterReset] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const [spritzClicked,setSpritzClicked]= useState(false);
    const [spritzExpanded, setSpritzExpanded] = useState(false);

    const handleExpandClick = (type) => {
        console.log('type', type);
        const typeToStateMap = {
            Spritz: { state: spritzExpanded, setState: setSpritzExpanded, setClicked: setSpritzClicked }

        };
        Object.entries(typeToStateMap).forEach(([key, value]) => {
            if (key === type) {
                console.log(key, value)
                value.setState(!value.state);
                value.setClicked(true);
            }
            else {
                value.setClicked(false);
            }
        });
    };

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
        if(!isLoading && cocktailsArr.length !== 0){
        setIsVisable(true);
        let beer = cocktailsArr.map((alcohol) => {
            return <TempDrinkCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
        }
        );
        setAllDishes(beer);
        setDisplayDishes(beer);
        }
    }, [isLoading,cocktailsArr]);

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


    // epxand more for wine category based on color
    const ExpandMore = styled((props) => {
        const { expand, header, ...other } = props;
        const [part1, part2] = header.split('||'); // Split the header into three parts
        return (
            <div {...other}>
                <div className='CategoryDivLeft'><span>{part1}</span></div>
                <div>||</div>
                <div className='CategoryDivRight'><span>{part2}</span></div>
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


    //Search useeffect
    useEffect(() => {
        if (searchQuery === "") {
            setNoneFound(false);
            if (cocktailsArr.length === 0) {
                setDisplayDishes(cocktailsArr);
            }
            else {
                let arr = cocktailsArr.map((alcohol) => {
                    return <TempDrinkCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
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
            let arr1 = cocktailsArr.filter((alcohol) => alcohol.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
            let arr2 = cocktailsArr.filter((alcohol) => alcohol.Name_Heb.includes(searchQuery));
            console.log(arr2);
            let arr4 = arr1.concat(arr2);
            arr4 = [...new Set(arr4)]
            if (arr4.length !== 0) {
                let arr = arr4.map((alcohol) => {
                    return <TempDrinkCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
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
        <Container style={{ width: '100%', justifyContent: 'center', paddingBottom:'3.5rem' }}>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <h1 className='homeTitle'>{t("Cocktails")}</h1>
                <SearchAppBar label={'cocktails'} searchFunc={setSearch} />
                {/* <DropDown /> */}
                {/* {searchQuery ==='' && <Grid container className='dishgridView'>
                    {dropArrays}
                </Grid>}
                {searchQuery ==='' && <div className='resetButtonDiv'>
                    <Button className='resetButton' onClick={(e) => {sortFilters();e.target.blur()}} sx={{ color: 'white', backgroundColor: '#3c27c5', borderRadius: '16px!important', fontFamily: 'Urbanist', textTransform: 'none', '&:hover ': { backgroundColor: '#3c27c5' } }}>Reset</Button>
                </div>} */}
                {searchQuery ===''? <div>
                    {/* <ExpandMore
                        header={'שפריץ||Spritz'}
                            aria-expanded={spritzExpanded}
                            aria-label="open spritz"
                            onClick={() => handleExpandClick('Spritz')}
                            className='wineCategory'
                            key='Spritz'
                            tabIndex={spritzClicked ? 0 : -1}

                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                        <Collapse isOpen={spritzExpanded} children={spritzArr.map((alc) => {
                            return <SpritzCard key={alc.IdAlc} alcohol={alc} title={alc.Name_Eng} />
                        }
                        )} /> */}
                {cocktailsArr.map((rum) => {
                            // return <TempDrinkCard alcohol={whiskey}/>
                            return <TempDrinkCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
                        }
                        )}
                </div>:
                displayDishes
                }
                            
                            </div>
        </Container>
    );
};

export default Cocktails;
