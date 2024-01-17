import React, { useState, useEffect } from 'react';
import BeerCard from '../HelpComponents/BeerCard';
import '../App.css';
import '../styles/Wines.css'
// import SearchAppBar from '../SearchAppBar';
import { Container } from 'react-bootstrap';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';
import Collapse from '@mui/material/Collapse';



import { styled } from '@mui/material/styles';





const Beverages = () => {
    const {beveragesArr, isLoading,hotDrinkArr,coldDrinkArr } = useUserContext();
    const [isVisible, setIsVisable] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [noneFound, setNoneFound] = useState(false);
    const [displayDishes, setDisplayDishes] = useState([]);

    const [lightExpand, setLightExpand] = useState(false);
    const [hotExpand, setHotExpand] = useState(false);

    useEffect(() => {
        if(!isLoading && beveragesArr.length !== 0){
        setIsVisable(true);
        let beer = beveragesArr.map((alcohol) => {
            return <BeerCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
        }
        );
        console.log('dishArr', beer);
        setDisplayDishes(beer);
        }
    }, [isLoading,beveragesArr]);

    //create filters for dryness and country


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
            if (beveragesArr.length === 0) {
                setDisplayDishes(beveragesArr);
            }
            else {
                let arr = beveragesArr.map((alcohol) => {
                    return <BeerCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
                }
                )
                setDisplayDishes(arr);
            }
        } else {
            setNoneFound(false);
            console.log("searchQuery is not empty");
            console.log(searchQuery)
            //filter wines arr if name includes searchQuery
            let arr1 = beveragesArr.filter((alcohol) => alcohol.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
            let arr2 = beveragesArr.filter((alcohol) => alcohol.Name_Heb.includes(searchQuery));
            console.log(arr2);
            let arr4 = arr1.concat(arr2);
            arr4 = [...new Set(arr4)]
            if (arr4.length !== 0) {
                let arr = arr4.map((alcohol) => {
                    return <BeerCard key={alcohol.IdAlc} alcohol={alcohol} title={alcohol.Name_Eng} />
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

    const handleExpandClick = (type) => {
        if (type === 'light') {
            setLightExpand(!lightExpand);
        }
        if (type === 'White') {
            setHotExpand(!hotExpand);
        }
    }


    return (
        <Container style={{ width: '100%', justifyContent: 'center' }}>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <SearchAppBar alt='beverages' searchFunc={setSearch} />
                <ExpandMore
                    expand={lightExpand}
                    header='שתייה קלה || light drinks'
                    onClick={() => handleExpandClick('light')}
                    aria-expanded={lightExpand}
                    aria-label="show more"
                    className='wineCategory'
                >
                </ExpandMore>
                    <Collapse in={lightExpand} timeout="auto" unmountOnExit>
                        {coldDrinkArr.map((beer) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <BeerCard key={beer.IdBev} alcohol={beer} title={beer.Name_Eng} />
                        }
                        )
                    }
                    </Collapse>
                    <ExpandMore
                        expand={hotExpand}
                        header='שתייה חמה || Hot drinks'
                        onClick={() => handleExpandClick('White')}
                        aria-expanded={hotExpand}
                        aria-label="show more"
                        className='wineCategory'
                    >
                    </ExpandMore>
                    <Collapse in={hotExpand} timeout="auto" unmountOnExit>
                        {hotDrinkArr.map((beer) => {
                            // return <TempAlcCard alcohol={whiskey}/>
                            return <BeerCard key={beer.IdBev} alcohol={beer} title={beer.Name_Eng} />
                        }
                        )
                    }
                    </Collapse>
                                            {noneFound && <h1>None Found</h1>}

                            </div>
        </Container>
    );
};

export default Beverages;
