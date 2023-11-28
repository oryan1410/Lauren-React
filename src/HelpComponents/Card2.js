import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material';
import { useState } from 'react';
import WineBarIcon from '@mui/icons-material/WineBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import '../styles/WineCard.css'

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: '0 auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard2(props) {

//   //const variable to pass to dishPage- will contain the spercific destails of the dish/wine to display
// const wine= props.wine;
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (

//     <div className="card2">
//         <div className="card2-image">
//             <img src={props.image} alt={`${props.title} image missing`} style={{height:50, width:50}} />
//             </div>
//             <div className='card2-title'>
//                 <h2>{props.title}</h2>
//             </div>
//             <div className='card2-description'>
//                 <p>{props.Description}</p>
//                 </div>
//         </div>
//   );
// }


export default function RecipeReviewCard2(props) {
    const [isImageClicked, setImageClicked] = useState(false);

    const handleImageClick = () => {
        setImageClicked(!isImageClicked);
    };

    const getTypes = (type) => {
        if (type === 'R') {
            return 'Red';
        }
        if (type === 'W') {
            return 'White';
        }
        if (type === 'B') {
            return 'Bubble';
        }
        if (type === 'Rose') {
            return 'Rose';
        }
    }

    const getTypesHeb = (type) => {
        if (type === 'R') {
            return 'אדום';
        }
        if (type === 'W') {
            return 'לבן';
        }
        if (type === 'B') {
            return 'מבעבע';
        }
        if (type === 'Rose') {
            return 'רוזה';
        }
    }

    const getDryness = (dryness) => {
        if (dryness === 'Y') {
            return 'Dry';
        }
        if (dryness === 'N') {
            return 'Sweet';
        }
    }

    const getDrynessHeb = (dryness) => {
        if (dryness === 'Y') {
            return 'יבש';
        }
        if (dryness === 'N') {
            return 'חצי-מתוק';
        }
    }


    return (
        <div className="cardTwo">
            <div className={`card2Content`}>
                <div>
                    <h1 className='card2-title'>{props.title}<br />{props.wine.Name_Heb}</h1>
                </div>
                <div>
                    <span className='card2-Subtitle'> {props.wine.WineryNeame_Eng} || {props.wine.WineryName_Heb} </span>

                </div>
                <div className='priceDiv'>
                    <span className='BottlePrice'>
                        <LiquorIcon className='cardLogos' style={{ margin: '0px 5px' }} />
                        {props.wine.BottlePrice3}
                    </span>
                    {props.wine.Cup_Y_N_ === 'Y' && <span className='BottlePrice'>
                        <WineBarIcon className='cardLogos' />
                        {props.wine.CupPrice}</span>}
                </div>
            </div>
            <div className='card2-right' >
                {/*a different way to view the details- with the seperation lines in an specific place */}
                <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{props.wine.Country_Heb}</span>
                    <span>||</span>
                    <span className='card2-span card2-rightText'>{props.wine.CountryName}</span></div>
                <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{getTypesHeb(props.wine.Type_R_W_B_)}</span>
                    <span>||</span>
                    <span className='card2-span card2-rightText'>{getTypes(props.wine.Type_R_W_B_)}</span></div>
                <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{getDrynessHeb(props.wine.Dry_y_n_)}</span>
                    <span>||</span>
                    <span className='card2-span card2-rightText'>{getDryness(props.wine.Dry_y_n_)}</span></div>
                {/* <span className='card2-details'>{props.wine.CountryName} || {props.wine.Country_Heb}</span>
                <span className='card2-details'>{getTypes(props.wine.Type_R_W_B_)} || {getTypesHeb(props.wine.Type_R_W_B_)}</span>
                <span className='card2-details'>{getDryness(props.wine.Dry_y_n_)} || {getDrynessHeb(props.wine.Dry_y_n_)}</span>               */}
                <div className='card2-button'>
                    <Link to={`/winePage/${props.wine.Id}`} className='linkWithoutSpace' style={{ textDecoration: 'none' }}  >
                        <Button sx={{
                            color: 'white',
                            backgroundColor: '#3c27c5',
                            borderRadius: '16px!important',
                            fontFamily: 'Urbanist', textTransform: 'none',
                            '&:hover ': { backgroundColor: '#3c27c5', boxShadow: '0 0 0 2px #1976d2' },
                            '&:focus': {
                                outline: 'none'
                            }
                        }} size="small" className='linkWithoutSpace' onClick={(e) => { e.target.blur() }} >Go to Wine</Button>
                    </Link>
                </div>
            </div>
            <div className={`card2-imageDiv ${isImageClicked ? 'slide' : ''}`} onClick={handleImageClick}>
                <div>
                    <InfoTwoToneIcon style={{ zIndex: 1, position: 'absolute', top: 5, right: 5, color: '#000' }} />
                    <img src={props.image} alt={`${props.title} image missing`} className="card2image" />
                </div>
            </div>
        </div>
    );
}