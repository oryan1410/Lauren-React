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
//                 <div className='CategoryDivLeft'><span>{part1}</span></div>
//                 <div>||</div>
//                 <div className='CategoryDivRight'><span>{part2}</span></div>
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

//     useEffect(() => {
//         console.log('useEffect');
//         console.log('displayDishes', displayDishes);
//     }, [displayDishes])

//     //search function
//     const setSearch = (e) => {
//         console.log('setSearchWines');
//         setSearchQuery(e);
//     }

//     useEffect(() => {
//         if(searchQuery !== ''){
//             searchArrays();
//         }
//         else{
//             setDisplayDishes([]);
//             setNoneFound(false);
//         }
//     }
//     ,[searchQuery])


//     const searchArrays = async() => {
//         let hebBev= beveragesArr.filter((bev) => bev.Name_Heb.includes(searchQuery));
//         let engBev= beveragesArr.filter((bev) => bev.Name_Eng.includes(searchQuery));
//         let bevArr = hebBev.concat(engBev);
//         let hebDish = dishesArr.filter((dish) => dish.Name_Eng.includes(searchQuery.toLowerCase()));
//         let engDish = dishesArr.filter((dish) => dish.Name_Heb.includes(searchQuery));
//         let dishArr = hebDish.concat(engDish);
//         if (dishArr.length !== 0 || bevArr.length !== 0) {
//             setNoneFound(false);
//             let finalDish = dishArr.map((dish) => {
//                 return <TempDishCard key={`dish${dish.IdDish}`} dish={dish} />
//             }
//             )
//             console.log('finalDish', finalDish);
//             let finalBev= bevArr.map((bev) => {
//                 return <BeerCard key={`bev${bev.IdBev}`} alcohol={bev} title={bev.Name_Eng} />
//             }
//             )
//             console.log('finalBev', finalBev);
//             let finalArr = finalDish.concat(finalBev);
//             setDisplayDishes(finalArr);
//         }        
//         else {
//             setNoneFound(true);
//             setDisplayDishes([]);
//         }
//     }
        
//     return (
//         <Container style={{ width: '100%', justifyContent: 'center' }}>
//             <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
//                 <header>
//                     <h1 className='homeTitle'>Menu</h1>
//                 </header>
//                 <main>
//                 <SearchAppBar label={'menu'} searchFunc={setSearch} />
//                 {/* <DropDown /> */}
//                 {searchQuery === '' && <div className='dishgridView'>
//                     <DropDown label='Type' options={['Meat', 'Fish', 'Vegan', 'Vegetarian']} setValue={handleValueChange} selected={selectedType} />
//                 </div>}
//                 {searchQuery === '' && <div className='resetButtonDiv'>
//                     <button className='resetButton' onClick={(e) => { resetFilter(); e.target.blur() }}>Reset</button>
//                 </div>}

//                 {searchQuery === '' ? 
//                 <div>
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
//                 </div> 
//                 : 
//                 displayDishes
//                 }
//                 {noneFound && <h1>None Found</h1>}
//                 </main>
//             </div>
//         </Container>
//     );
// };

// export default Dishes;

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

// import Collapse from '@mui/material/Collapse';
import Collapse from '../HelpComponents/Collapse';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TempDishCard from '../HelpComponents/TempDishCard';
import BeerCard from '../HelpComponents/BeerCard';
import TempDrinkCard from '../HelpComponents/TempDrinkCard';
import NewDishCard from '../HelpComponents/NewDishCard';





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

    const dropOptionsEng = [
         'Meat', 'Fish', 'Vegan', 'Vegetarian'
    ];

    const dropOptionsHeb = [
        'בשרי', 'דגים', 'טבעוני', 'צמחוני'
    ];


    function handleValueChange(value, label) {
        console.log('Value changed to:', value);
        if (language==='heb'){
            if (value==='בשרי'){
                setSelectedType('Meat');
                filterDishes('Meat');
            }
            else if (value==='דגים'){
                setSelectedType('Fish');
                filterDishes('Fish');
            }
            else if (value==='טבעוני'){
                setSelectedType('Vegan');
                filterDishes('Vegan');
            }
            else if (value==='צמחוני'){
                setSelectedType('Vegetarian');
                filterDishes('Vegetarian');
            }
        }
        else {
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
                return <NewDishCard key={dish.IdDish} dish={dish} />
            }
            )
            app = easyArr.filter((dish) => dish.IngType === selectedType);
            app = app.map((dish) => {
                return <NewDishCard key={dish.IdDish} dish={dish} />
            }
            )
            main = nextToWineArr.filter((dish) => dish.IngType === selectedType);
            main = main.map((dish) => {
                return <NewDishCard key={dish.IdDish} dish={dish} />
            }
            )
            forHungry = forTheHungryArr.filter((dish) => dish.IngType === selectedType);
            forHungry = forHungry.map((dish) => {
                return <NewDishCard key={dish.IdDish} dish={dish} />
            }
            )
            des = dessertsArr.filter((dish) => dish.IngType === selectedType);
            des = des.map((dish) => {
                return <NewDishCard key={dish.IdDish} dish={dish} />
            }
            )
            setAppArr(app);
            setMainArr(main);
            setForArr(forHungry);
            setDesArr(des);
        }
    }

    // useEffect(() => {
    //     console.log('dishesArr', dishesArr);
    //     let json= JSON.stringify(dishesArr);
    //     // Assuming your array is named 'firestoreArray'
    //     console.log(JSON.stringify(dishesArr, null, 2));
    // }, [dishesArr])

    useEffect(() => {
        if (!isLoading)
            setIsVisable(true);
        let app = easyArr.map((dish) => {
            return <NewDishCard key={dish.IdDish} dish={dish} />
        }
        )

        let cold = coldDrinkArr.map((beer) => {
            // return <TempAlcCard alcohol={whiskey}/>
            return <TempDrinkCard key={beer.IdBev} alcohol={beer} title={beer.Name_Eng} />
        }
        )

        let hot = hotDrinkArr.map((beer) => {
            // return <TempAlcCard alcohol={whiskey}/>
            return <TempDrinkCard key={beer.IdBev} alcohol={beer} title={beer.Name_Eng} />
        }
        )

        let main = nextToWineArr.map((dish) => {
            return <NewDishCard key={dish.IdDish} dish={dish} />
        }
        )

        let des = dessertsArr.map((dish) => {
            return <NewDishCard key={dish.IdDish} dish={dish} />
        }
        )
        let forTheHungry = forTheHungryArr.map((dish) => {
            return <NewDishCard key={dish.IdDish} dish={dish} />
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
                <div className='CategoryDivLeft'><span>{part1}</span></div>
                <div>||</div>
                <div className='CategoryDivRight'><span>{part2}</span></div>
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


    //search function
    const setSearch = (e) => {
        console.log('setSearchWines');
        setSearchQuery(e);
    }

    useEffect(() => {
        if(searchQuery !== ''){
            searchArrays();
        }
        else{
            setDisplayDishes([]);
            setNoneFound(false);
        }
    }
    ,[searchQuery])


    const searchArrays = async() => {
        let engDish = dishesArr.filter((dish) => dish.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
        let hebDish = dishesArr.filter((dish) => dish.Name_Heb.includes(searchQuery));
        let dishArr = hebDish.concat(engDish);
        if (dishArr.length !== 0 ) {
            setNoneFound(false);
            let finalDish = dishArr.map((dish) => {
                return <NewDishCard key={`dish${dish.IdDish}`} dish={dish} />
            }
            )
            console.log('finalDish', finalDish);
            setDisplayDishes(finalDish);
        }        
        else {
            setNoneFound(true);
            setDisplayDishes([]);
        }
    }

    const tempDish ={
        "IdDish": 32,
        "Name_Heb": "שוקולד למבוגרים",
        "Name_Eng": "Chocolate for adults",
        "Type": "Dessert",
        "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/wines--react-test.appspot.com/o/DishPics%2FChocolate%20for%20adults?alt=media&token=e03ed6b1-fe09-4909-ad26-f5dc90de875a",
        "Desc_Heb": "רינג שוקולד קטיפתי על מצע דקואז נוגט, גנאש קפה, קקאו מוזהב וטוויל שוקולד מריר ",
        "Desc_Eng": "A velvety chocolate ring on a decoase nougat base, coffee ganache, golden cocoa and dark chocolate twill",
        "CPrice": "52",
        "IngType": "Vegetarian",
        "inStock": true,
        "onMenu": "Y",
    }
        
    return (
        <Container style={{ width: '100%', justifyContent: 'center', paddingBottom:'3.5rem' }}>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <header>
                    <h1 className='homeTitle'>Menu</h1>
                </header>
                <main>
                <SearchAppBar label={'menu'} searchFunc={setSearch} />
                {/* <DropDown /> */}
                {searchQuery === '' && <div className='dishgridView'>
                    <DropDown label='Type' options={language==='heb'? dropOptionsHeb:dropOptionsEng} setValue={handleValueChange} selected={selectedType} />
                </div>}
                {searchQuery === '' && <div className='resetButtonDiv'>
                    <button className='resetButton' onClick={(e) => { resetFilter(); e.target.blur() }}>Reset</button>
                </div>}
                {searchQuery === '' ? 
                <div>
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
                    {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {appArr}
                    </Collapse> */}
                    {/* <div className={`collapse ${expanded ? 'show':'closed'}`}>
                        {appArr}
                    </div> */}
                 <Collapse children={appArr} isOpen={expanded}/>
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
                    <Collapse children={mainArr} isOpen={nextExpanded}/>
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
<Collapse children={forArr} isOpen={forExpanded}/>
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
                  <Collapse children={desArr} isOpen={desExpanded}/>
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
                    <Collapse children={coldArr} isOpen={coldExpanded}/>
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
                    <Collapse children={hotArr} isOpen={hotExpanded}/>
                    </aside>
                </div> 
                : 
                displayDishes
                }
                {noneFound && <h1>None Found</h1>}
                </main>
            </div>
        </Container>
    );
};

export default Dishes;



