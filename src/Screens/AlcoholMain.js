// import React, { useState, useEffect } from 'react';
// import AlcoholCard from '../HelpComponents/AlcoholCard';
// import DishCard from '../HelpComponents/DishCard';
// import '../App.css';
// import '../styles/Wines.css'
// import dishes from '../DishesArr.json'
// // import SearchAppBar from '../SearchAppBar';
// import { Container } from 'react-bootstrap';
// import DropDown from '../HelpComponents/DropDown';
// import SearchAppBar from '../SearchAppBar';
// import { useUserContext } from '../UserContext';

// import Collapse from '@mui/material/Collapse';
// import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




// const AlcoholMain = () => {
//     const [expanded, setExpanded] = useState(false);
//     const [americanExpanded, setAmericanExpanded] = useState(false);
//     const [smokedExpanded, setSmokedExpanded] = useState(false);
//     const [coniacExpanded, setConiacExpanded] = useState(false);
//     const [rumExpanded, setRumExpanded] = useState(false);
//     const [ginExpanded, setGinExpanded] = useState(false);
//     const [taqilaExpanded, setTaquilaExpanded]= useState(false)
//     const [apperetivoExpanded, setApperetivoExpanded] = useState(false);
//     const [anisExpanded, setAnisExpanded] = useState(false);
//     const [vodkaExpanded, setVodkaExpanded] = useState(false);
//     const [beerExpanded, setBeerExpanded] = useState(false);
//     const { alcoholArr, whiskeyArr, americanArr, smokedArr, coniacArr, vodkaArr, rumArr, ginArr, taquillaArr, apperativoArr, anisArr } = useUserContext();
//     const [isVisible, setIsVisable] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [allDishes, setAllDishes] = useState([]);
//     const [noneFound, setNoneFound] = useState(false);
//     const [displayDishes, setDisplayDishes] = useState([]);






//     useEffect(() => {
//         setIsVisable(true);
//     }, []);

//     //create filters for dryness and country

//     // get countries and sort filters


//     // epxand more for wine category based on color
//     const ExpandMore = styled((props) => {
//         const { expand, header, ...other } = props;
//         const [part1, part2] = header.split('||'); // Split the header into three parts
//         return (
//             <div {...other}>
//                 <div className='CategoryDivLeft'>{part1}</div>
//                 <div>||</div>
//                 <div className='CategoryDivRight'>{part2}</div>
//             </div>
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
//         if (type === 'Red') {
//             setExpanded(!expanded);
//         }
//         else if (type === 'White') {
//             setAmericanExpanded(!americanExpanded);
//         }
//         else if (type === 'Rose') {
//             setSmokedExpanded(!smokedExpanded);
//         }
//         else if (type === 'Bubble') {
//             setConiacExpanded(!coniacExpanded);
//         }
//         else if (type === 'Rum'){
//             setRumExpanded(!rumExpanded);
//         }
//         else if (type==='Gin'){
//             setGinExpanded(!ginExpanded)
//         }
//         else if (type==='Tequila'){
//             setTaquilaExpanded(!taqilaExpanded)
//         }
//         else if (type==='Apperativo'){
//             setApperetivoExpanded(!apperetivoExpanded)
//         }
//         else if (type==='Anis'){
//             setAnisExpanded(!anisExpanded)
//         }
//         else if (type==='Vodka'){
//             setVodkaExpanded(!vodkaExpanded)
//         }
//         else if (type==='Beer'){
//             setBeerExpanded(!beerExpanded)
//         }
       
//     };


//     //Search useeffect
//     useEffect(() => {
//         if (searchQuery === "") {
//             setNoneFound(false);
//             if (allDishes.length !== 0) {
//                 setDisplayDishes(allDishes);
//             }
//             else {
//                 let arr = alcoholArr.map((alcohol) => {
//                     return <AlcoholCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
//                 }
//                 )
//                 setAllDishes(arr);
//                 setDisplayDishes(arr);
//             }
//         } else {
//             setNoneFound(false);
//             console.log("searchQuery is not empty");
//             console.log(searchQuery)
//             //filter wines arr if name includes searchQuery
//             let arr1 = alcoholArr.filter((alcohol) => alcohol.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
//             let arr2 = alcoholArr.filter((alcohol) => alcohol.Name_Heb.includes(searchQuery));
//             let arr4 = arr1.concat(arr2);
//             arr4 = [...new Set(arr4)]
//             if (arr4.length !== 0) {
//                 console.log('arr4', arr4.length)
//                 let arr = arr4.map((alcohol) => {
//                     return <AlcoholCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
//                 }
//                 )
//                 setDisplayDishes(arr);
//                 // setArr(wines.filter((wine) => wine.name.toLowerCase().includes(searchQuery.toLowerCase())));
//             }
//             else {
//                 setDisplayDishes([]);
//                 setNoneFound(true);
//             }

//         }

//     }, [searchQuery]);

//     useEffect(() => {
//         console.log('noneFound', noneFound);
//     }, [noneFound])

//     //search function
//     const setSearch = (e) => {
//         console.log('setSearchWines');
//         setSearchQuery(e);
//     }


//     return (
//         <Container style={{ width: '100%', justifyContent: 'center' }}>
//             <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
//                 <SearchAppBar searchFunc={setSearch} />
//                 {searchQuery ===''? <div>
//                 <ExpandMore
//                     expand={expanded}
//                     header={'וויסקי||Whiskey'}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                     onClick={() => handleExpandClick('Red')}
//                     className='wineCategory'

//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//                 <Collapse in={expanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {whiskeyArr.map((whiskey) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={whiskey.IdAlc} alcohol={whiskey} title={whiskey.Name_Eng} />
//                         }
//                         )} 
//                                            </div>
//                 </Collapse>
//                 <ExpandMore
//                     expand={americanExpanded}
//                     header={'אמריקאיים||American'}
//                     aria-expanded={americanExpanded}
//                     aria-label="show more"
//                     onClick={() => handleExpandClick('White')}
//                     className='wineCategory'
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//                 <Collapse in={americanExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {americanArr.map((american) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={american.IdAlc} alcohol={american} title={american.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 <ExpandMore
//                     expand={smokedExpanded}
//                     header={'מעושנים||Smoked'}
//                     aria-expanded={smokedExpanded}
//                     aria-label="show more"
//                     onClick={() => handleExpandClick('Rose')}
//                     className='wineCategory'
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//                 <Collapse in={smokedExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {smokedArr.map((smoked) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={smoked.IdAlc} alcohol={smoked} title={smoked.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 <ExpandMore
//                     expand={coniacExpanded}
//                     header={'קוניאק||Coniac'}
//                     aria-expanded={coniacExpanded}
//                     aria-label="show more"
//                     onClick={() => handleExpandClick('Bubble')}
//                     className='wineCategory'
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//                 <Collapse in={coniacExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {coniacArr.map((coniac) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={coniac.IdAlc} alcohol={coniac} title={coniac.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 <ExpandMore
//                     expand={rumExpanded}
//                     header={'רום||Rum'}
//                     aria-expanded={rumExpanded}
//                     aria-label="show more"
//                     onClick={() => handleExpandClick('Rum')}
//                     className='wineCategory'
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//                 <Collapse in={rumExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {rumArr.map((rum) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 <ExpandMore
//                 expand={ginExpanded}
//                 header={`ג'ין||Gin`}
//                 aria-expanded={ginExpanded}
//                 aria-label={'show more'}
//                 onClick={() => handleExpandClick('Gin')}
//                 className='wineCategory'
//             >
//                 <ExpandMoreIcon />
//             </ExpandMore>
//             <Collapse in={ginExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {ginArr.map((rum) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 <ExpandMore
//                 expand={taqilaExpanded}
//                 header={`טקילה || Tequila`}
//                 aria-expanded={taqilaExpanded}
//                 aria-label={'show more'}
//                 onClick={() => handleExpandClick('Tequila')}
//                 className='wineCategory'
//             >
//                 <ExpandMoreIcon />
//             </ExpandMore>
//             <Collapse in={taqilaExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {taquillaArr.map((rum) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 <ExpandMore
//                 expand={apperetivoExpanded}
//                 header={`אפריטיף || Aperitif`}
//                 aria-expanded={apperetivoExpanded}
//                 aria-label={'show more'}
//                 onClick={() => handleExpandClick('Apperativo')}
//                 className='wineCategory'
//             >
//                 <ExpandMoreIcon />
//             </ExpandMore>
//             <Collapse in={apperetivoExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {apperativoArr.map((rum) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 <ExpandMore 
//                 expand={anisExpanded}
//                 header={`אניס || Anis`}
//                 aria-expanded={anisExpanded}
//                 aria-label={'show more'}
//                 onClick={() => handleExpandClick('Anis')}
//                 className='wineCategory'
//             >
//                 <ExpandMoreIcon />
//             </ExpandMore>
//             <Collapse in={anisExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {anisArr.map((rum) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 <ExpandMore
//                 expand={vodkaExpanded}
//                 header={`וודקה || Vodka`}
//                 aria-expanded={vodkaExpanded}
//                 aria-label={'show more'}
//                 onClick={() => handleExpandClick('Vodka')}
//                 className='wineCategory'
//             >
//                 <ExpandMoreIcon />
//             </ExpandMore>
//             <Collapse in={vodkaExpanded} timeout="auto" unmountOnExit>
//                     <div className='dishgridView'>
//                         {vodkaArr.map((rum) => {
//                             // return <TempAlcCard alcohol={whiskey}/>
//                             return <AlcoholCard key={rum.IdAlc} alcohol={rum} title={rum.Name_Eng} />
//                         }
//                         )}                    </div>
//                 </Collapse>
//                 </div>:
//                 displayDishes
//                 }
//                                             {noneFound && <h1>None Found</h1>}

//                             </div>
//         </Container>
//     );
// };

// export default AlcoholMain;


import React, { useState, useEffect } from 'react';
import AlcoholCard from '../HelpComponents/AlcoholCard';
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
    const [singleExpanded, setSingleExpanded] = useState(false);
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
    const { alcoholArr,beerArr, whiskeyArr, americanArr, smokedArr, coniacArr, vodkaArr, rumArr, ginArr, taquillaArr, apperativoArr, anisArr } = useUserContext();
    const [isVisible, setIsVisable] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [allDishes, setAllDishes] = useState([]);
    const [noneFound, setNoneFound] = useState(false);
    const [displayDishes, setDisplayDishes] = useState([]);






    useEffect(() => {
        setIsVisable(true);
    }, []);

    //create filters for dryness and country

    // get countries and sort filters


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
        else if (type==='Single'){
            setSingleExpanded(!singleExpanded)
        }
       
    };


    //Search useeffect
    useEffect(() => {
        if (searchQuery === "") {
            setNoneFound(false);
            if (allDishes.length !== 0) {
                setDisplayDishes(allDishes);
            }
            else {
                let arr2 = alcoholArr.filter((alcohol) => alcohol.Type!=='Cocktail');
                let arr = arr2.map((alcohol) => {
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
            let tempArr= alcoholArr.filter((alcohol) => alcohol.Type!=='Cocktail');

            let arr1 = tempArr.filter((alcohol) => alcohol.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
            let arr2 = tempArr.filter((alcohol) => alcohol.Name_Heb.includes(searchQuery));
            let arr4 = arr1.concat(arr2);
            arr4 = [...new Set(arr4)]
            if (arr4.length !== 0) {
                console.log('arr4', arr4.length)
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

    useEffect(() => {
        console.log('noneFound', noneFound);
    }, [noneFound])

    //search function
    const setSearch = (e) => {
        console.log('setSearchWines');
        setSearchQuery(e);
    }


    return (
        <Container style={{ width: '100%', justifyContent: 'center' }}>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <SearchAppBar searchFunc={setSearch} />
                {searchQuery ===''? <div>

                    <ExpandMore
                    expand={beerExpanded}
                    header={'בירה||Beer'}
                    aria-expanded={beerExpanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('Beer')}
                    className='wineCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={beerExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {beerArr.map((beer) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={beer.IdAlc} alcohol={beer} title={beer.Name_Eng} />
                        }
                        )}                    </div>
                </Collapse>
                <ExpandMore
                    expand={expanded}
                    header={'וויסקי||Whiskey'}
                    aria-expanded={expanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('Red')}
                    className='wineCategory'

                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                        {/* {whiskeyArr.map((whiskey) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={whiskey.IdAlc} alcohol={whiskey} title={whiskey.Name_Eng} />
                        }
                        )}  */}

<ExpandMore
                    expand={singleExpanded}
                    header={'סינגל מאלט||Single Malt'}
                    aria-expanded={americanExpanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('Single')}
                    className='wineSubCategory'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={singleExpanded} timeout="auto" unmountOnExit>
                    <div className='dishgridView'>
                       {whiskeyArr.map((whiskey) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <AlcoholCard key={whiskey.IdAlc} alcohol={whiskey} title={whiskey.Name_Eng} />
                        }
                        )} 
                                           </div>
                </Collapse>
                          <ExpandMore
                    expand={americanExpanded}
                    header={'אמריקאיים||American'}
                    aria-expanded={americanExpanded}
                    aria-label="show more"
                    onClick={() => handleExpandClick('White')}
                    className='wineSubCategory'
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
                    className='wineSubCategory'
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
                                           </div>
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
                header={`אפריטיף || Aperitif`}
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
                </div>:
                displayDishes
                }
                                            {noneFound && <h1>None Found</h1>}

                            </div>
        </Container>
    );
};

export default AlcoholMain;

