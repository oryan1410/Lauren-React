import React, { useEffect, useState } from 'react';
import { useUserContext } from '../UserContext';
import wines from '../WinesArr.json'
import RecipeReviewCard2 from '../HelpComponents/Card2';
import { Container } from 'react-bootstrap';
import '../styles/Favorites.css'
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useTranslation } from 'react-i18next';



const Favorites = () => {
    // Assuming you have an array of favorite wine IDs
    const { favorites, winesArr, isLoading } = useUserContext();
    const [redWines, setRedWines] = useState([]);
    const [whiteWines, setWhiteWines] = useState([]);
    const [roseWines, setRoseWines] = useState([]);
    const [bubbleWines, setBubbleWines] = useState([]);
    const [isVisible, setIsVisable] = useState(false);

    const [expanded, setExpanded] = useState(false);
    const [whiteExpanded, setWhiteExpanded] = useState(false);
    const [roseExpanded, setRoseExpanded] = useState(false);
    const [bubbleExpanded, setBubbleExpanded] = useState(false);

    // focuse state
    const [redClicked, setRedClicked] = useState(false);
    const [whiteClicked, setWhiteClicked] = useState(false);
    const [roseClicked, setRoseClicked] = useState(false);
    const [bubbleClicked, setBubbleClicked] = useState(false);

    const { t } = useTranslation();

    const renderFavorites = () => {
        let redArr = []
        let whiteArr = []
        let roseArr = []
        let bubbleArr = []
        winesArr.forEach(wine => {
            if (favorites.includes(wine.Id)) {
                if (wine.Type_Ro_Re_Wh_Bu_ === 'Re') {
                    redArr.push(wine)
                }
                if (wine.Type_Ro_Re_Wh_Bu_ === 'Wh') {
                    whiteArr.push(wine)
                }
                if (wine.Type_Ro_Re_Wh_Bu_ === 'Ro') {
                    roseArr.push(wine)
                }
                if (wine.Type_Ro_Re_Wh_Bu_ === 'Bu') {
                    bubbleArr.push(wine)
                }
            }
        });
        console.log(redArr);
        console.log(whiteArr);
        console.log(roseArr);
        console.log(bubbleArr);
        setRedWines(redArr);
        setWhiteWines(whiteArr);
        setRoseWines(roseArr);
        setBubbleWines(bubbleArr);
    }



    useEffect(() => {
        if (!isLoading) {
renderFavorites();
        }
    }, [favorites,winesArr, isLoading])

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
        // if (type === 'Red') {
        //     setExpanded(!expanded);

        // }
        // else if (type === 'White') {
        //     setWhiteExpanded(!whiteExpanded);
        // }
        // else if (type === 'Rose') {
        //     setRoseExpanded(!roseExpanded);
        // }
        // else if (type === 'Bubble') {
        //     setBubbleExpanded(!bubbleExpanded);
        // }

        const typesofWines = {
            Red: {expanded: expanded, setExpanded: setExpanded, clicked: redClicked, setClicked: setRedClicked},
            White: {expanded: whiteExpanded, setExpanded: setWhiteExpanded, clicked: whiteClicked, setClicked: setWhiteClicked},
            Rose: {expanded: roseExpanded, setExpanded: setRoseExpanded, clicked: roseClicked, setClicked: setRoseClicked},
            Bubble: {expanded: bubbleExpanded, setExpanded: setBubbleExpanded, clicked: bubbleClicked, setClicked: setBubbleClicked},
        }
        
        Object.entries(typesofWines).forEach(([key, value]) => {
            if (key===type) {
                value.setExpanded(!value.expanded);
                value.setClicked(true);
            }   
            else {
                value.setClicked(false);
            }
        });
    };

    useEffect(() => {
        setIsVisable(true);
        return () => {
            setIsVisable(false);
        }
    }, []);

    return (
        <Container>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                <h1 className='favoriteTitle'>{t('Favorite')}</h1>
                {/* {favorites.map((wineId) => (
                <WineCard key={wineId} wineId={wineId} />
            ))} */}
                <ExpandMore
                    expand={expanded}
                    header='יינות אדומים || red wines'
                    onClick={() => handleExpandClick('Red')}
                    aria-expanded={expanded}
                    aria-label="show more red wines"
                    className='wineCategory'
                    autoFocus={redClicked}
                    key='red'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    {redWines.map((wine) => (
                        <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                    ))}
                </Collapse>
                <ExpandMore
                    expand={whiteExpanded}
                    header='יינות לבנים || white wines'
                    onClick={() => handleExpandClick('White')}
                    aria-expanded={whiteExpanded}
                    aria-label="show more white wines"
                    className='wineCategory'
                    autoFocus={whiteClicked}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={whiteExpanded} timeout="auto" unmountOnExit>
                    {whiteWines.map((wine) => (
                        <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                    ))}
                </Collapse>
                <ExpandMore
                    expand={roseExpanded}
                    header='יינות רוזה || rose wines'
                    onClick={() => handleExpandClick('Rose')}
                    aria-expanded={roseExpanded}
                    aria-label="show more rose wines"
                    className='wineCategory'
                    autoFocus={roseClicked}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={roseExpanded} timeout="auto" unmountOnExit>
                    {roseWines.map((wine) => (
                        <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                    ))}
                </Collapse>
                <ExpandMore
                    expand={bubbleExpanded}
                    header='יינות מבעבעים || sparkling wines'
                    onClick={() => handleExpandClick('Bubble')}
                    aria-expanded={bubbleExpanded}
                    aria-label="show more bubble wines"
                    className='wineCategory'
                    autoFocus={bubbleClicked}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={bubbleExpanded} timeout="auto" unmountOnExit>
                    {bubbleWines.map((wine) => (
                        <RecipeReviewCard2 key={wine.Id} wine={wine} title={wine.Name_Eng} image={wine.ImageUrl} Description={wine.Description} />
                    ))}
                </Collapse>
            </div>
        </Container>
    );
};

export default Favorites;
