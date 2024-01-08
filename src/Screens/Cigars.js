import React, { useState, useEffect } from 'react';
import BeerCard from '../HelpComponents/BeerCard';
import TempCocktailCard from '../HelpComponents/TempCocktailCard';
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




const Cigars = () => {
    const {cocktailsArr, isLoading } = useUserContext();
    const [selectedDryness, setSelectedDryness] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isVisible, setIsVisable] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [displayDishes, setDisplayDishes] = useState([]);

    const [dropArrays, setDropArrays] = useState([]);

    useEffect(() => {
        setIsVisable(true);
        console.log('cocktailsArr', cocktailsArr);
    }, [cocktailsArr])

   

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


    useEffect(() => {
        console.log('dropArrays', dropArrays);
    }
        , [dropArrays])

    //Search useeffect
    useEffect(() => {
        if (searchQuery === "") {
            if (cocktailsArr.length === 0) {
                setDisplayDishes(cocktailsArr);
            }
            else {
                let arr = cocktailsArr.map((alcohol) => {
                    return <TempCocktailCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
                }
                )
                setDisplayDishes(arr);
            }
        } else {
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
                    return <TempCocktailCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
                }
                )
                setDisplayDishes(arr);
                // setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
            }
            else {
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
                </div>:
                displayDishes
                }
                            
                            </div>
        </Container>
    );
};

export default Cigars;
