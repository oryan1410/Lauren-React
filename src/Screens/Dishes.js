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
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TempDishCard from '../HelpComponents/TempDishCard';
import BeerCard from '../HelpComponents/BeerCard';





const Dishes = () => {
    const [expanded, setExpanded] = useState(false);
    const [nextExpanded, setNextExpanded] = useState(false);
    const [forExpanded, setForExpanded] = useState(false);
    const [desExpanded, setDesExpanded] = useState(false);
    const [coldExpanded, setColdExpanded] = useState(false);
    const [hotExpanded, setHotExpanded] = useState(false);
    const { dishesArr, easyArr, nextToWineArr, dessertsArr, countries, language, isLoading, forTheHungryArr, beveragesArr, hotDrinkArr, coldDrinkArr } = useUserContext();
    const [selectedType, setSelectedType] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isVisible, setIsVisable] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [allDishes, setAllDishes] = useState([]);
    const [noneFound, setNoneFound] = useState(false);
    const [displayDishes, setDisplayDishes] = useState([]);

    const [dropArrays, setDropArrays] = useState([]);

    //dishes and beverages arrays for expansion panels
    const [appArr, setAppArr] = useState([]);
    const [mainArr, setMainArr] = useState([]);
    const [forArr, setForArr] = useState([]);
    const [desArr, setDesArr] = useState([]);
    const [coldArr, setColdArr] = useState([]);
    const [hotArr, setHotArr] = useState([]);

    const [resetKey, setResetKey] = useState(0);
    const [filterReset, setFilterReset] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // clicked states for autoFocus
    const [appClicked, setAppClicked] = useState(false);
    const [mainClicked, setMainClicked] = useState(false);
    const [forClicked, setForClicked] = useState(false);
    const [desClicked, setDesClicked] = useState(false);
    const [coldClicked, setColdClicked] = useState(false);
    const [hotClicked, setHotClicked] = useState(false);
    const [resetClicked, setResetClicked] = useState(false);

    function handleValueChange(value, label) {
        console.log('Value changed to:', value);
        if (label === 'Dryness') {
            setSelectedType(value);
            if (value === 'Dry') {
                setSelectedType('Y');
            }
            else {
                setSelectedType('N');
            }
            //console.log('arr', arr);
        }
        else if (label === 'Country') {
            setSelectedCountry(value);
        }
        else if (label === 'Type') {
            setSelectedType(value);
            filterDishes(value);
        }


    };

    const filterDishes = async (selectedType) => {
        console.log('filterDishes');
        let arr = dishesArr;
        let app = [];
        let main = [];
        let forHungry = [];
        let des = [];
        if (selectedType !== '') {
            arr = arr.filter((dish) => dish.IngType === selectedType);
            arr = arr.map((dish) => {
                return <TempDishCard key={dish.IdDish} dish={dish} />
            }
            )
            app = easyArr.filter((dish) => dish.IngType === selectedType);
            app = app.map((dish) => {
                return <TempDishCard key={dish.IdDish} dish={dish} />
            }
            )
            main = nextToWineArr.filter((dish) => dish.IngType === selectedType);
            main = main.map((dish) => {
                return <TempDishCard key={dish.IdDish} dish={dish} />
            }
            )
            forHungry = forTheHungryArr.filter((dish) => dish.IngType === selectedType);
            forHungry = forHungry.map((dish) => {
                return <TempDishCard key={dish.IdDish} dish={dish} />
            }
            )
            des = dessertsArr.filter((dish) => dish.IngType === selectedType);
            des = des.map((dish) => {
                return <TempDishCard key={dish.IdDish} dish={dish} />
            }
            )
            setAppArr(app);
            setMainArr(main);
            setForArr(forHungry);
            setDesArr(des);
        }
    }

    useEffect(() => {
        if (!isLoading)
            setIsVisable(true);
        let app = easyArr.map((dish) => {
            return <TempDishCard key={dish.IdDish} dish={dish} />
        }
        )

        let cold = coldDrinkArr.map((beer) => {
            // return <TempAlcCard alcohol={whiskey}/>
            return <BeerCard key={beer.IdBev} alcohol={beer} title={beer.Name_Eng} />
        }
        )

        let hot = hotDrinkArr.map((beer) => {
            // return <TempAlcCard alcohol={whiskey}/>
            return <BeerCard key={beer.IdBev} alcohol={beer} title={beer.Name_Eng} />
        }
        )

        let main = nextToWineArr.map((dish) => {
            return <TempDishCard key={dish.IdDish} dish={dish} />
        }
        )

        let des = dessertsArr.map((dish) => {
            return <TempDishCard key={dish.IdDish} dish={dish} />
        }
        )
        let forTheHungry = forTheHungryArr.map((dish) => {
            return <TempDishCard key={dish.IdDish} dish={dish} />
        }
        )
        setAppArr(app);
        setMainArr(main);
        setForArr(forTheHungry);
        setDesArr(des);
        setColdArr(cold);
        setHotArr(hot);
    }, [dishesArr, language, isLoading, resetKey]);

    //reset filter function
    const resetFilter = async () => {
        console.log('resetFilters');
        setDesExpanded(false);
        setForExpanded(false);
        setNextExpanded(false);
        setExpanded(false);
        setFilterReset(true);
        setSelectedType('');
        setSelectedColor('');
        setSelectedCountry('');
        setSelectedType('');
        setAppClicked(false);
        setMainClicked(false);
        setForClicked(false);
        setDesClicked(false);
        setColdClicked(false);
        setHotClicked(false);
        setResetClicked(true);

        // setResetKey(prevKey => prevKey + 1); // increment the key
    }

    useEffect(() => {
        if (filterReset) {
            setTimeout(() => {
                // setSelectedType('');
                // setSelectedColor('');
                // setSelectedCountry('');
                // setSelectedType('');
                setResetKey(prevKey => prevKey + 1); // increment the key
                setFilterReset(false);
            }
                , 1000);
        }
    }, [filterReset])

    // epxand more for wine category based on color
    const ExpandMore = styled((props) => {
        const { expand, header, ...other } = props;
        const [part1, part2] = header.split('||'); // Split the header into three parts
        return (
            <button {...other}>
                <div className='CategoryDivLeft'>{part1}</div>
                <div>||</div>
                <div className='CategoryDivRight'>{part2}</div>
            </button>
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
        const expandStates = {
            Easy: { expanded: expanded, setExpanded:setExpanded, appClicked: appClicked, setClicked: setAppClicked },
            Next: { expanded: nextExpanded, setExpanded:setNextExpanded, mainClicked: mainClicked, setClicked: setMainClicked },
            For: { expanded: forExpanded, setExpanded:setForExpanded, forClicked: forClicked, setClicked: setForClicked },
            Desset: { expanded: desExpanded, setExpanded:setDesExpanded, desClicked: desClicked, setClicked: setDesClicked },
            Cold: { expanded: coldExpanded, setExpanded:setColdExpanded, coldClicked: coldClicked, setClicked: setColdClicked },
            Hot: { expanded: hotExpanded, setExpanded:setHotExpanded, hotClicked: hotClicked, setClicked: setHotClicked }
        };
        Object.entries(expandStates).forEach(([key, value]) => {
            if (key===type) {
                value.setExpanded(!value.expanded);
                value.setClicked(true);
                setTimeout(() => {
                    value.setClicked(false);
                }, 3000);
            }
            else {
                value.setClicked(false);
            }
        });
    };

    //Search useeffect
    useEffect(() => {
        if (searchQuery === "") {
            setNoneFound(false);
            if (allDishes.length !== 0) {
                setDisplayDishes(allDishes);
            }
            else {
                // let arr = dishes.map((dish) => {
                //     return <DishCard key={dish.IdDish} dish={dish} title={dish.Name_Eng} image={dish.ImageUrl} />
                // }
                // )
                let arr = dishesArr.map((dish) => {
                    return <TempDishCard key={dish.IdDish} dish={dish} />
                }
                )
                setAllDishes(arr);
                setDisplayDishes(arr);
            }
        } else {
            resetFilter();
            setNoneFound(false);
            console.log("searchQuery is not empty");
            //filter wines arr if name includes searchQuery
            let arr1 = dishesArr.filter((dish) => dish.Name_Eng.includes(searchQuery.toLowerCase()));
            let arr2 = dishesArr.filter((dish) => dish.Name_Heb.includes(searchQuery));
            console.log(arr2);
            let arr4 = arr1.concat(arr2);
            arr4 = [...new Set(arr4)];
            let hebBev= beveragesArr.filter((bev) => bev.Name_Heb.includes(searchQuery));
            let engBev= beveragesArr.filter((bev) => bev.Name_Eng.includes(searchQuery));
            let bevArr = hebBev.concat(engBev);
            bevArr = [...new Set(bevArr)];
            if (arr4.length !== 0 || bevArr.length !== 0) {
                let arr = arr4.map((dish) => {
                    return <TempDishCard key={dish.IdDish} dish={dish} />
                }
                )
                let bev= bevArr.map((bev) => {
                    return <BeerCard key={bev.IdBev} alcohol={bev} title={bev.Name_Eng} />
                }
                )
                arr = arr.concat(bev);
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
                <header>
                    <h1 className='homeTitle'>Menu</h1>
                </header>
                <main>
                <SearchAppBar label={'menu'} searchFunc={setSearch} />
                {/* <DropDown /> */}
                {searchQuery === '' && <div className='dishgridView'>
                    <DropDown label='Type' options={['Meat', 'Fish', 'Vegan', 'Vegetarian']} setValue={handleValueChange} selected={selectedType} />
                </div>}
                {searchQuery === '' && <div className='resetButtonDiv'>
                    <Button className='resetButton' onClick={(e) => { resetFilter(); e.target.blur() }} sx={{ color: 'white', backgroundColor: '#3c27c5', borderRadius: '16px!important', fontFamily: 'Urbanist', textTransform: 'none', '&:hover ': { backgroundColor: '#3c27c5' } }}>Reset</Button>
                </div>}

                {searchQuery === '' ? <div>
                    <aside id='Easy'>
                    <ExpandMore
                        expand={expanded}
                        header='לנשנש בקליל  || Easy snacks'
                        onClick={() => handleExpandClick('Easy')}
                        aria-expanded={expanded}
                        aria-label="show more- easy snacks"
                        className='wineCategory'
                        autoFocus={appClicked}
                    >
                    </ExpandMore>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {appArr}
                    </Collapse>
                    </aside>
                    <aside id='Next'>
                    <ExpandMore
                        expand={nextExpanded}
                        header='ליד היין || Next to the wine'
                        onClick={() => handleExpandClick('Next')}
                        aria-expanded={expanded}
                        aria-label="show more- next to the wine"
                        className='wineCategory'
                        autoFocus={mainClicked}
                    >
                    </ExpandMore>
                    <Collapse in={nextExpanded} timeout="auto" unmountOnExit>
                        {mainArr}
                    </Collapse>
                    </aside>
                    <aside id='For'>
                    <ExpandMore
                        expand={forExpanded}
                        header='לרעבים בנינו || For the hungry'
                        onClick={() => handleExpandClick('For')}
                        aria-expanded={expanded}
                        aria-label="show more- for the hungry"
                        className='wineCategory'
                        autoFocus={forClicked}
                    >
                    </ExpandMore>
                    <Collapse in={forExpanded} timeout="auto" unmountOnExit>
                        {forArr}
                    </Collapse>
                    </aside>
                    <aside id='Desset'>
                    <ExpandMore
                        expand={desExpanded}
                        header='סיום מתוק || Sweet ending'
                        onClick={() => handleExpandClick('Desset')}
                        aria-expanded={expanded}
                        aria-label="show more- desserts"
                        className='wineCategory'
                        autoFocus={desClicked}
                    >
                    </ExpandMore>
                    <Collapse in={desExpanded} timeout="auto" unmountOnExit>
                        {desArr}
                    </Collapse>
                    </aside>
                    <aside id='Cold'>
                    <ExpandMore
                        expand={coldExpanded}
                        header='שתייה קלה || Light drinks'
                        onClick={() => handleExpandClick('Cold')}
                        aria-expanded={expanded}
                        aria-label="show more- cold drinks"
                        className='wineCategory'
                        autoFocus={coldClicked}
                    >
                    </ExpandMore>
                    <Collapse in={coldExpanded} timeout="auto" unmountOnExit>
                        {coldArr}
                    </Collapse>
                    </aside>
                    <aside id='Hot'>
                    <ExpandMore
                        expand={hotExpanded}
                        header='שתייה חמה || Hot drinks'
                        onClick={() => handleExpandClick('Hot')}
                        aria-expanded={expanded}
                        aria-label="show more- hot drinks"
                        className='wineCategory'
                        autoFocus={hotClicked}
                    >
                    </ExpandMore>
                    <Collapse in={hotExpanded} timeout="auto" unmountOnExit>
                        {hotArr}
                    </Collapse>
                    </aside>
                </div> : displayDishes
                }

                {/* {displayDishes} */}
                {noneFound && <h1>None Found</h1>}
                </main>
            </div>
        </Container>
    );
};

export default Dishes;





// import React, { useState, useEffect } from 'react';
// import Card from '../HelpComponents/Card';
// import RecipeReviewCard2 from '../HelpComponents/Card2';
// import DishCard from '../HelpComponents/DishCard';
// import '../App.css';
// import '../styles/Wines.css'
// import '../styles/Dishes.css'
// import dishes from '../DishesArr.json'
// // import SearchAppBar from '../SearchAppBar';
// import { Container } from 'react-bootstrap';
// import DropDown from '../HelpComponents/DropDown';
// import SearchAppBar from '../SearchAppBar';
// import { useUserContext } from '../UserContext';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';

// import Collapse from '@mui/material/Collapse';
// import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import TempDishCard from '../HelpComponents/TempDishCard';
// import BeerCard from '../HelpComponents/BeerCard';

// import { useTranslation } from 'react-i18next';





// const Dishes = () => {
//     const [expanded, setExpanded] = useState(false);
//     const [nextExpanded, setNextExpanded] = useState(false);
//     const [forExpanded, setForExpanded] = useState(false);
//     const [desExpanded, setDesExpanded] = useState(false);
//     const [coldExpanded, setColdExpanded] = useState(false);
//     const [hotExpanded, setHotExpanded] = useState(false);
//     const { dishesArr, easyArr, nextToWineArr, dessertsArr, countries, language, isLoading, forTheHungryArr, beveragesArr, hotDrinkArr, coldDrinkArr } = useUserContext();
//     const [selectedType, setSelectedType] = useState('');
//     const [selectedColor, setSelectedColor] = useState('');
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [isVisible, setIsVisable] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [allDishes, setAllDishes] = useState([]);
//     const [noneFound, setNoneFound] = useState(false);
//     const [displayDishes, setDisplayDishes] = useState([]);
//     const {t} = useTranslation();

//     const [dropArrays, setDropArrays] = useState([]);

//     //dishes and beverages arrays for expansion panels
//     const [appArr, setAppArr] = useState([]);
//     const [mainArr, setMainArr] = useState([]);
//     const [forArr, setForArr] = useState([]);
//     const [desArr, setDesArr] = useState([]);
//     const [coldArr, setColdArr] = useState([]);
//     const [hotArr, setHotArr] = useState([]);

//     const [resetKey, setResetKey] = useState(0);
//     const [filterReset, setFilterReset] = useState(false);
//     const [isAnimating, setIsAnimating] = useState(false);

//     // clicked states for autoFocus
//     const [appClicked, setAppClicked] = useState(false);
//     const [mainClicked, setMainClicked] = useState(false);
//     const [forClicked, setForClicked] = useState(false);
//     const [desClicked, setDesClicked] = useState(false);
//     const [coldClicked, setColdClicked] = useState(false);
//     const [hotClicked, setHotClicked] = useState(false);
//     const [resetClicked, setResetClicked] = useState(false);

//     function handleValueChange(value, label) {
//         console.log('Value changed to:', value);
//         if (label === 'Dryness') {
//             setSelectedType(value);
//             if (value === 'Dry') {
//                 setSelectedType('Y');
//             }
//             else {
//                 setSelectedType('N');
//             }
//             //console.log('arr', arr);
//         }
//         else if (label === 'Country') {
//             setSelectedCountry(value);
//         }
//         else if (label === 'Type') {
//             setSelectedType(value);
//             filterDishes(value);
//         }


//     };

//     const filterDishes = async (selectedType) => {
//         console.log('filterDishes');
//         let arr = dishesArr;
//         let app = [];
//         let main = [];
//         let forHungry = [];
//         let des = [];
//         if (selectedType !== '') {
//             arr = arr.filter((dish) => dish.IngType === selectedType);
//             arr = arr.map((dish) => {
//                 return <TempDishCard key={dish.IdDish} dish={dish} />
//             }
//             )
//             app = easyArr.filter((dish) => dish.IngType === selectedType);
//             app = app.map((dish) => {
//                 return <TempDishCard key={dish.IdDish} dish={dish} />
//             }
//             )
//             main = nextToWineArr.filter((dish) => dish.IngType === selectedType);
//             main = main.map((dish) => {
//                 return <TempDishCard key={dish.IdDish} dish={dish} />
//             }
//             )
//             forHungry = forTheHungryArr.filter((dish) => dish.IngType === selectedType);
//             forHungry = forHungry.map((dish) => {
//                 return <TempDishCard key={dish.IdDish} dish={dish} />
//             }
//             )
//             des = dessertsArr.filter((dish) => dish.IngType === selectedType);
//             des = des.map((dish) => {
//                 return <TempDishCard key={dish.IdDish} dish={dish} />
//             }
//             )
//             setAppArr(app);
//             setMainArr(main);
//             setForArr(forHungry);
//             setDesArr(des);
//         }
//     }

//     useEffect(() => {
//         if (!isLoading)
//             setIsVisable(true);
//         let app = easyArr.map((dish) => {
//             return <TempDishCard key={dish.IdDish} dish={dish} />
//         }
//         )

//         let cold = coldDrinkArr.map((beer) => {
//             // return <TempAlcCard alcohol={whiskey}/>
//             return <BeerCard key={beer.IdBev} alcohol={beer} title={beer.Name_Eng} />
//         }
//         )

//         let hot = hotDrinkArr.map((beer) => {
//             // return <TempAlcCard alcohol={whiskey}/>
//             return <BeerCard key={beer.IdBev} alcohol={beer} title={beer.Name_Eng} />
//         }
//         )

//         let main = nextToWineArr.map((dish) => {
//             return <TempDishCard key={dish.IdDish} dish={dish} />
//         }
//         )

//         let des = dessertsArr.map((dish) => {
//             return <TempDishCard key={dish.IdDish} dish={dish} />
//         }
//         )
//         let forTheHungry = forTheHungryArr.map((dish) => {
//             return <TempDishCard key={dish.IdDish} dish={dish} />
//         }
//         )
//         setAppArr(app);
//         setMainArr(main);
//         setForArr(forTheHungry);
//         setDesArr(des);
//         setColdArr(cold);
//         setHotArr(hot);
//     }, [dishesArr, language, isLoading, resetKey]);

//     //reset filter function
//     const resetFilter = async () => {
//         console.log('resetFilters');
//         setDesExpanded(false);
//         setForExpanded(false);
//         setNextExpanded(false);
//         setExpanded(false);
//         setFilterReset(true);
//         setSelectedType('');
//         setSelectedColor('');
//         setSelectedCountry('');
//         setSelectedType('');
//         setAppClicked(false);
//         setMainClicked(false);
//         setForClicked(false);
//         setDesClicked(false);
//         setColdClicked(false);
//         setHotClicked(false);
//         setResetClicked(true);

//         // setResetKey(prevKey => prevKey + 1); // increment the key
//     }

//     useEffect(() => {
//         if (filterReset) {
//             setTimeout(() => {
//                 // setSelectedType('');
//                 // setSelectedColor('');
//                 // setSelectedCountry('');
//                 // setSelectedType('');
//                 setResetKey(prevKey => prevKey + 1); // increment the key
//                 setFilterReset(false);
//             }
//                 , 1000);
//         }
//     }, [filterReset])

//     // epxand more for wine category based on color
//     const ExpandMore = styled((props) => {
//         const { expand, header, ...other } = props;
//         const [part1, part2] = header.split('||'); // Split the header into three parts
//         return (
//             <button {...other}>
//                 <div className='CategoryDivLeft'>{part1}</div>
//                 <div>||</div>
//                 <div className='CategoryDivRight'>{part2}</div>
//             </button>
//         );
//     })(({ theme, expand }) => ({
//         display: 'flex', // Use Flexbox for alignment
//         justifyContent: 'space-between', // Distribute the space evenly between the div elements
//         marginLeft: '0 auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     }));

//     const handleExpandClick = (type) => {
//         const expandStates = {
//             Easy: { expanded: expanded, setExpanded:setExpanded, appClicked: appClicked, setClicked: setAppClicked },
//             Next: { expanded: nextExpanded, setExpanded:setNextExpanded, mainClicked: mainClicked, setClicked: setMainClicked },
//             For: { expanded: forExpanded, setExpanded:setForExpanded, forClicked: forClicked, setClicked: setForClicked },
//             Desset: { expanded: desExpanded, setExpanded:setDesExpanded, desClicked: desClicked, setClicked: setDesClicked },
//             Cold: { expanded: coldExpanded, setExpanded:setColdExpanded, coldClicked: coldClicked, setClicked: setColdClicked },
//             Hot: { expanded: hotExpanded, setExpanded:setHotExpanded, hotClicked: hotClicked, setClicked: setHotClicked }
//         };
//         Object.entries(expandStates).forEach(([key, value]) => {
//             if (key===type) {
//                 value.setExpanded(!value.expanded);
//                 value.setClicked(true);
//                 setTimeout(() => {
//                     value.setClicked(false);
//                 }, 3000);
//             }
//             else {
//                 value.setClicked(false);
//             }
//         });
//     };

//     //Search useeffect
//     useEffect(() => {
//         if (searchQuery === "") {
//             setNoneFound(false);
//             if (allDishes.length !== 0) {
//                 setDisplayDishes(allDishes);
//             }
//             else {
//                 // let arr = dishes.map((dish) => {
//                 //     return <DishCard key={dish.IdDish} dish={dish} title={dish.Name_Eng} image={dish.ImageUrl} />
//                 // }
//                 // )
//                 let arr = dishesArr.map((dish) => {
//                     return <TempDishCard key={dish.IdDish} dish={dish} />
//                 }
//                 )
//                 setAllDishes(arr);
//                 setDisplayDishes(arr);
//             }
//         } else {
//             resetFilter();
//             setNoneFound(false);
//             console.log("searchQuery is not empty");
//             //filter wines arr if name includes searchQuery
//             let arr1 = dishesArr.filter((dish) => dish.Name_Eng.includes(searchQuery.toLowerCase()));
//             let arr2 = dishesArr.filter((dish) => dish.Name_Heb.includes(searchQuery));
//             console.log(arr2);
//             let arr4 = arr1.concat(arr2);
//             arr4 = [...new Set(arr4)];
//             let hebBev= beveragesArr.filter((bev) => bev.Name_Heb.includes(searchQuery));
//             let engBev= beveragesArr.filter((bev) => bev.Name_Eng.includes(searchQuery));
//             let bevArr = hebBev.concat(engBev);
//             bevArr = [...new Set(bevArr)];
//             if (arr4.length !== 0 || bevArr.length !== 0) {
//                 let arr = arr4.map((dish) => {
//                     return <TempDishCard key={dish.IdDish} dish={dish} />
//                 }
//                 )
//                 let bev= bevArr.map((bev) => {
//                     return <BeerCard key={bev.IdBev} alcohol={bev} title={bev.Name_Eng} />
//                 }
//                 )
//                 arr = arr.concat(bev);
//                 setDisplayDishes(arr);
//                 // setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
//             }
//             else {
//                 setDisplayDishes([]);
//                 setNoneFound(true);
//             }
//         }

//     }, [searchQuery]);

//     //search function
//     const setSearch = (e) => {
//         console.log('setSearchWines');
//         setSearchQuery(e);
//     }

//     const handleSkipLinkClick = (e) => {
//         e.preventDefault();
//         const element = document.getElementById(e.target.href.split('#')[1]);
//         handleExpandClick(element.id);
//     }

//     return (
//         <Container style={{ width: '100%', justifyContent: 'center' }}>
//             <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
//             <header>
//                     <h1 className='homeTitle'>Menu</h1>
//                 </header>
//             <header>
//                     <div className='SkipLinks'>
//                     <h1 className='homeTitle'>{t('fast nav links')}</h1>
//                     <a href='#Easy' onClick={handleSkipLinkClick} className='homeLink'>{t('Easy')}</a>
//                     <a href='#Next' onClick={handleSkipLinkClick} className='homeLink'>{t('Coniac')}</a>
//                     <a href='#For' onClick={handleSkipLinkClick} className='homeLink'>{t('Rum')}</a>
//                     <a href='#Desset' onClick={handleSkipLinkClick} className='homeLink'>{t('Gin')}</a>
//                     <a href='#Cold' onClick={handleSkipLinkClick} className='homeLink'>{t('Tequila')}</a>
//                     <a href='#Hot' onClick={handleSkipLinkClick} className='homeLink'>{t('Apperativo')}</a>
//                     </div>
//                 </header>                
//                 <main>
//                 <SearchAppBar label={'menu'} searchFunc={setSearch} />
//                 {/* <DropDown /> */}
//                 {searchQuery === '' && <div className='dishgridView'>
//                     <DropDown label='Type' options={['Meat', 'Fish', 'Vegan', 'Vegetarian']} setValue={handleValueChange} selected={selectedType} />
//                 </div>}
//                 {searchQuery === '' && <div className='resetButtonDiv'>
//                     <Button className='resetButton' onClick={(e) => { resetFilter(); e.target.blur() }} sx={{ color: 'white', backgroundColor: '#3c27c5', borderRadius: '16px!important', fontFamily: 'Urbanist', textTransform: 'none', '&:hover ': { backgroundColor: '#3c27c5' } }}>Reset</Button>
//                 </div>}

//                 {searchQuery === '' ? <div>
//                     <aside id='Easy'>
//                     <ExpandMore
//                         expand={expanded}
//                         header='לנשנש בקליל  || Easy snacks'
//                         onClick={() => handleExpandClick('Easy')}
//                         aria-expanded={expanded}
//                         aria-label="show more- easy snacks"
//                         className='wineCategory'
//                         autoFocus={appClicked}
//                     >
//                     </ExpandMore>
//                     <Collapse in={expanded} timeout="auto" unmountOnExit>
//                         {appArr}
//                     </Collapse>
//                     </aside>
//                     <aside id='Next'>
//                     <ExpandMore
//                         expand={nextExpanded}
//                         header='ליד היין || Next to the wine'
//                         onClick={() => handleExpandClick('Next')}
//                         aria-expanded={expanded}
//                         aria-label="show more- next to the wine"
//                         className='wineCategory'
//                         autoFocus={mainClicked}
//                     >
//                     </ExpandMore>
//                     <Collapse in={nextExpanded} timeout="auto" unmountOnExit>
//                         {mainArr}
//                     </Collapse>
//                     </aside>
//                     <aside id='For'>
//                     <ExpandMore
//                         expand={forExpanded}
//                         header='לרעבים בנינו || For the hungry'
//                         onClick={() => handleExpandClick('For')}
//                         aria-expanded={expanded}
//                         aria-label="show more- for the hungry"
//                         className='wineCategory'
//                         autoFocus={forClicked}
//                     >
//                     </ExpandMore>
//                     <Collapse in={forExpanded} timeout="auto" unmountOnExit>
//                         {forArr}
//                     </Collapse>
//                     </aside>
//                     <aside id='Desset'>
//                     <ExpandMore
//                         expand={desExpanded}
//                         header='סיום מתוק || Sweet ending'
//                         onClick={() => handleExpandClick('Desset')}
//                         aria-expanded={expanded}
//                         aria-label="show more- desserts"
//                         className='wineCategory'
//                         autoFocus={desClicked}
//                     >
//                     </ExpandMore>
//                     <Collapse in={desExpanded} timeout="auto" unmountOnExit>
//                         {desArr}
//                     </Collapse>
//                     </aside>
//                     <aside id='Cold'>
//                     <ExpandMore
//                         expand={coldExpanded}
//                         header='שתייה קלה || Light drinks'
//                         onClick={() => handleExpandClick('Cold')}
//                         aria-expanded={expanded}
//                         aria-label="show more- cold drinks"
//                         className='wineCategory'
//                         autoFocus={coldClicked}
//                     >
//                     </ExpandMore>
//                     <Collapse in={coldExpanded} timeout="auto" unmountOnExit>
//                         {coldArr}
//                     </Collapse>
//                     </aside>
//                     <aside id='Hot'>
//                     <ExpandMore
//                         expand={hotExpanded}
//                         header='שתייה חמה || Hot drinks'
//                         onClick={() => handleExpandClick('Hot')}
//                         aria-expanded={expanded}
//                         aria-label="show more- hot drinks"
//                         className='wineCategory'
//                         autoFocus={hotClicked}
//                     >
//                     </ExpandMore>
//                     <Collapse in={hotExpanded} timeout="auto" unmountOnExit>
//                         {hotArr}
//                     </Collapse>
//                     </aside>
//                 </div> : displayDishes
//                 }

//                 {/* {displayDishes} */}
//                 {noneFound && <h1>None Found</h1>}
//                 </main>
//             </div>
//         </Container>
//     );
// };

// export default Dishes;
