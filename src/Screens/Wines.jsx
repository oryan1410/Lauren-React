import React, { useState, useEffect } from 'react';
import RecipeReviewCard2 from '../HelpComponents/Card2';
import '../App.css';
import '../styles/Wines.css'
import wines from '../WinesArr.json'
import { Grid } from '@mui/material';
// import SearchAppBar from '../SearchAppBar';
import { Container } from 'react-bootstrap';
import DropDown from '../HelpComponents/DropDown';
import { Button } from '@mui/material';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';

// import Collapse from '@mui/material/Collapse';
import Collapse from '../HelpComponents/Collapse';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import PageFooter from '../HelpComponents/PageFooters';

const Wines = () => {

    const location = useLocation();

    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(location.state?.expanded || false);
    const [whiteExpanded, setWhiteExpanded] = useState(location.state?.whiteExpanded || false);
    const [roseExpanded, setRoseExpanded] = useState(location.state?.roseExpanded || false);
    const [bubbleExpanded, setBubbleExpanded] = useState(location.state?.bubbleExpanded || false);
    const [bestOfExpanded, setBestOfExpanded] = useState(location.state?.bestOfExpanded || false);
    const { redWines, whiteWines, roseWines, bubbleWines,bestOfWines, countries,countriesHeb, getFilters,getFavorites, language, winesArr, getWinesArr, isLoading } = useUserContext();
    const [selectedDryness, setSelectedDryness] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isVisible, setIsVisable] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [allWines, setAllWines] = useState([]);
    const [noneFound, setNoneFound] = useState(false);
    const [displayWines2, setDisplayWines2] = useState([]);
    const [testDisplay, setTestDisplay] = useState([]);

    const [dropArrays, setDropArrays] = useState([]);

    //wine arrays for expansion panels
    const [redWinesArr, setRedWinesArr] = useState([]);
    const [whiteWinesArr, setWhiteWinesArr] = useState([]);
    const [roseWinesArr, setRoseWinesArr] = useState([]);
    const [bubbleWinesArr, setBubbleWinesArr] = useState([]);
    const [bestArr, setBestArr] = useState([]);

    const [resetKey, setResetKey] = useState(0);
    const [filterReset, setFilterReset] = useState(false);


    // for auto scrolling to expanded panel
    const expandedDivRef1 = useRef(null);
    const expandedDivRef2 = useRef(null);
    const expandedDivRef3 = useRef(null);
    const expandedDivRef4 = useRef(null);

    //for focusing on expanded panel
    const [redClicked, setRedClicked] = useState(false);
    const [whiteClicked, setWhiteClicked] = useState(false);
    const [roseClicked, setRoseClicked] = useState(false);
    const [bubbleClicked, setBubbleClicked] = useState(false);
    const [bestOfClicked, setBestOfClicked] = useState(false);
    const [resetClicked, setResetClicked] = useState(false);



    useEffect(() => {
        setDropArrays([
            <DropDown key={resetKey + '0'} label='Dryness' options={language==='heb'?['יבש','חצי-מתוק']:['Dry', 'Half-Sweet']} setValue={handleValueChange} selected={selectedDryness} />,
            <DropDown key={resetKey + '1'} label='Country' options={language==='heb'? countriesHeb:countries} setValue={handleValueChange} selected={selectedCountry} />
        ]);
    }, [language]);


    function handleValueChange(value, label) {
        if (label === 'Dryness') {
            setSelectedDryness(value);
            if (value === 'Dry' || value === 'יבש') {
                setSelectedDryness('Y');
            }
            else {
                setSelectedDryness('N');
            }
        }
        else if (label === 'Country') {
            if (language==='heb'){
                setSelectedCountry(countries[countriesHeb.indexOf(value)]);
            }
            else if (language==='en'){
            setSelectedCountry(value);
        }
        }


    };

    

    //useEffect to reset filters- after a filter has been chosen
    useEffect(() => {
        if(selectedDryness !== '' || selectedCountry !== ''){
        setExpanded(false);
        setWhiteExpanded(false);
        setRoseExpanded(false);
        setBubbleExpanded(false);
        setBestOfExpanded(false);
        setFilterReset(true);
        }

        // set all expanded to false

        // getFilters();
    }, [selectedDryness, selectedCountry]);

    //useEffect to filter wines according to selected filters
    useEffect(() => {
        if (filterReset) {           
            setTimeout(() => {
                filterWines();
                setFilterReset(false);
            }, 500);
        }
    }, [filterReset]);


    // filter wines according to selected filters
    const filterWines = async () => {
        let arr = winesArr;
      
        if (selectedCountry !== '') {
            arr = arr.filter((wine) => wine.Country_Eng === selectedCountry);
        }
        if (selectedDryness !== '') {
            arr = arr.filter((wine) => wine.Dry_Y_N_ === selectedDryness);
        }   

        let red = [];
        let white = [];
        let rose = [];
        let bubble = [];
        let best= []

        arr.forEach((wine) => {
            if (wine.bestOf===true){
                best.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }
            else if (wine.Type_Ro_Re_Wh_Bu_ === 'Re') {
                red.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }
            else if (wine.Type_Ro_Re_Wh_Bu_ === 'Wh') {
                white.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }
            else if (wine.Type_Ro_Re_Wh_Bu_ === 'Ro') {
                rose.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }
            else if (wine.Type_Ro_Re_Wh_Bu_ === 'Bu') {
                bubble.push(<RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />);
            }

        }
        );
        setRedWinesArr(red);
        setWhiteWinesArr(white);
        setRoseWinesArr(rose);
        setBubbleWinesArr(bubble);
        setBestArr(best);
    }


    const renderWines = (winesArr) => {
        setIsVisable(true);

        let arr = winesArr.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        });
        let arr2 = wines.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        });
        setAllWines(arr2);
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
        let bestOfArr = bestOfWines.map((wine) => {
            return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
        }
        );
        setRedWinesArr(redArr);
        setWhiteWinesArr(whiteArr);
        setRoseWinesArr(roseArr);
        setBubbleWinesArr(bubbleArr);
        setBestArr(bestOfArr)

        
        if (expanded && expandedDivRef1.current) {
            expandedDivRef1.current.scrollIntoView({ behavior: 'smooth' });
          }
          else if (whiteExpanded && expandedDivRef2.current) {
              expandedDivRef2.current.scrollIntoView({ behavior: 'smooth' });
          }
          else if (roseExpanded && expandedDivRef3.current) {
              expandedDivRef3.current.scrollIntoView({ behavior: 'smooth' });
          }
          else if (bubbleExpanded && expandedDivRef4.current) {
              expandedDivRef4.current.scrollIntoView({ behavior: 'smooth' });
          }       
       
    }

    useEffect(() => {
        if(!isLoading && winesArr!= [undefined]){
            renderWines(winesArr);
        }
    }
    , [winesArr, isLoading]);


    useEffect(() => {
        if(redWinesArr.length !== 0 && whiteWinesArr.length !== 0 && roseWinesArr.length !== 0 && bubbleWinesArr.length !== 0){
            scrollToDiv();
        }
    }, [redWinesArr, whiteWinesArr, roseWinesArr, bubbleWinesArr]);

    const scrollToDiv = () => {
        if (expanded && expandedDivRef1.current) {
            expandedDivRef1.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (whiteExpanded && expandedDivRef2.current) {
            expandedDivRef2.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (roseExpanded && expandedDivRef3.current) {
            expandedDivRef3.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (bubbleExpanded && expandedDivRef4.current) {
            expandedDivRef4.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // useEffect(() => {
    //     if (redClicked && focusedRed.current) {

    //         focusedRed.current.focus();
    //         setRedClicked(false);
    //         console.log('redClicked');
    //     }
    //     else if (whiteClicked && focusedWhite.current) {
    //         setWhiteClicked(false);
    //         setTimeout(() => focusedWhite.current.focus(), 0);
    //     }
    //     else if (roseClicked && focusedRose.current) {
    //         setRoseClicked(false);
    //     }
    //     else if (bubbleClicked && focusedBubble.current) {
    //         focusedBubble.current.focus();
    //         setBubbleClicked(false);
    //     }
    //     else if (bestOfClicked && focusedBestOf.current) {
    //         console.log('bestOfClicked');
    //         focusedBestOf.current.focus();
    //         setBestOfClicked(false);
    //     }
    // }
    // , [redClicked, whiteClicked, roseClicked, bubbleClicked, bestOfClicked]);


    //create filters for dryness and country
    const sortFilters = async () => {
        setSelectedDryness('');
        setSelectedColor('');
        setSelectedCountry('');
        setResetKey(prevKey => prevKey + 1); // increment the key
        setDropArrays([
            <DropDown key={resetKey + '0'} label='Dryness' options={language==='heb'?['יבש','חצי-מתוק']:['Dry', 'Half-Sweet']} setValue={handleValueChange} selected={''} />,
            <DropDown key={resetKey + '1'} label='Country' options={language==='heb'? countriesHeb:countries} setValue={handleValueChange} selected={''} />
        ]);
    }

    const resetFilter = () => {
        setSelectedDryness('');
        setSelectedColor('');
        setSelectedCountry('');
        setExpanded(false);
        setWhiteExpanded(false);
        setRoseExpanded(false);
        setBubbleExpanded(false);
        setBestOfExpanded(false);
        setBestOfClicked(false);
        setRedClicked(false);
        setWhiteClicked(false);
        setRoseClicked(false);
        setBubbleClicked(false);
        setResetClicked(true);
        setResetKey(prevKey => prevKey + 1); // increment the key
        setDropArrays([
            <DropDown key={resetKey + '0'} label='Dryness' options={language==='heb'?['יבש','חצי-מתוק']:['Dry', 'Half-Sweet']} setValue={handleValueChange} selected={''} />,
            <DropDown key={resetKey + '1'} label='Country' options={language==='heb'? countriesHeb:countries} setValue={handleValueChange} selected={''} />
        ]);
        setFilterReset(true);
    }

    // get countries and sort filters
    useEffect(() => {
        if (countries.length === 0) {
            getFilters();
        }
        else {
            sortFilters();
        }
    }, [countries]);

    // epxand more for wine category based on color
    const ExpandMore = styled((props) => {
        const { expand, header, ...other } = props;
        const [part1, part2] = header.split('||'); // Split the header into three parts
        return (
          <button {...other} >
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
        const typeOfExpands = {
            Red: {expanded: expanded, setExpanded: setExpanded, clicked: redClicked, setClicked: setRedClicked},
            White: {expanded: whiteExpanded, setExpanded: setWhiteExpanded, clicked: whiteClicked, setClicked: setWhiteClicked},
            Rose: {expanded: roseExpanded, setExpanded: setRoseExpanded, clicked: roseClicked, setClicked: setRoseClicked},
            Bubble: {expanded: bubbleExpanded, setExpanded: setBubbleExpanded, clicked: bubbleClicked, setClicked: setBubbleClicked},
            BestOf: {expanded: bestOfExpanded, setExpanded: setBestOfExpanded, clicked: bestOfClicked, setClicked: setBestOfClicked},
        }

        Object.entries(typeOfExpands).forEach(([key, value]) => {
            if (key===type) {
                value.setExpanded(!value.expanded);
                value.setClicked(true);
                setTimeout(() => {
                    value.setClicked(false);
                }, 2000);
            }
            else {
                value.setClicked(false);
            }
        });
    };


    useEffect(() => {
        if (searchQuery === "") {
            setNoneFound(false);
            if (allWines.length !== 0) {
                setDisplayWines2(allWines);
            }
            else {
                let arr = winesArr.map((wine) => {
                    return <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                }
                )
                setAllWines(arr);
                setDisplayWines2(arr);
            }
        } else {
            setNoneFound(false);
            //filter wines arr if name includes searchQuery
            let arr1 = winesArr.filter((wine) => wine.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
            let arr2 = winesArr.filter((wine) => wine.Name_Heb.includes(searchQuery));
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

    //search function
    const setSearch = (e) => {
        setSearchQuery(e);
    }


    //getFavorites
    useEffect(() => {
        getFavorites();
    }, []);


    return (
        <>
        <Container style={{ width: '100%', justifyContent: 'center', paddingBottom:'3.5rem' }}>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <header role="header">
                <h1 className='homeTitle' aria-label='Wines'>{t('Wines')}</h1>
                </header>               
                <SearchAppBar label={'wines'} searchFunc={setSearch} />
                {/* <DropDown /> */}
                <main role='main'>
                {searchQuery ==='' && <Grid container className='dishgridView'>
                    {dropArrays}
                </Grid>}
                {searchQuery ==='' && <div className={`resetButtonDiv ${language==='heb'&& 'hebReset'}`}>
                    <button
                    className='resetButton' 
                    onClick={(e) => {resetFilter()}}
                    sx={{ color: 'white', 
                    borderRadius: '16px!important',             
                    '&:focus': {
                        outline: 'none'
                      } }}><p>{language==='heb'?'איפוס':'Reset'}</p></button>
                </div>}
                
                {searchQuery === '' ? 
           
                <div>
                    <ExpandMore
                    header='יינות אדומים || Red wines'
                    onClick={() => handleExpandClick('Red')}
                    aria-expanded={expanded}
                    aria-label="show more red wines"
                    className='wineCategory'
                    key={'red'}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                    <Collapse ref={expandedDivRef1} isOpen={expanded} children={redWinesArr} />
                    <ExpandMore
                        expand={whiteExpanded}
                        header='יינות לבנים || White wines'
                        onClick={() => handleExpandClick('White')}
                        aria-expanded={expanded}
                        aria-label="show more white wines"
                        className='wineCategory'
                        key={'white'}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse ref={expandedDivRef2} isOpen={whiteExpanded} children={whiteWinesArr} />
                    <ExpandMore
                        expand={roseExpanded}
                        header='יינות רוזה || Rose wines'
                        onClick={() => handleExpandClick('Rose')}
                        aria-expanded={expanded}
                        aria-label="show more rose wines"
                        className='wineCategory'
                        key={'rose'}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse ref={expandedDivRef3} isOpen={roseExpanded} children={roseWinesArr} />
                    <ExpandMore
                        expand={bubbleExpanded}
                        header='יינות מבעבעים || Bubble wines'
                        onClick={() => handleExpandClick('Bubble')}
                        aria-expanded={expanded}
                        aria-label="show more bubble wines"
                        className='wineCategory'
                        key={'bubble'}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse ref={expandedDivRef4} isOpen={bubbleExpanded} children={bubbleWinesArr} />
                    <ExpandMore 
                    expand={bestOfExpanded}
                    header='יינות מיוחדים || Special wines'
                    onClick={() => handleExpandClick('BestOf')}
                    aria-expanded={expanded}
                    aria-label="show more special wines"
                    className='wineCategory'
                    key={'bestOf'}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse isOpen={bestOfExpanded} children={bestArr} ref={expandedDivRef4} />
                     </div>
                      : displayWines2
                }
                {/* {displayWines2} */}
                {noneFound && <h1>None Found</h1>}
                {testDisplay}
                </main>
                

            </div>
           
        </Container>
        {/* <PageFooter /> */}
        </>
    );
};

export default Wines;
