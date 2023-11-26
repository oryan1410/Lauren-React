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

    const getDryness = (dryness) => {
        if (dryness === 'Y') {
            return 'Dry';
        }
        if (dryness === 'N') {
            return 'Sweet';
        }
    }


    return (
        <div className="cardTwo">
            <div className={`card2Content`}>
                <div>
                    <h1 className='card2-title'>{props.title}</h1>
                </div>
                <div>
                    <h2 className='card2-Subtitle'> {props.wine.WineryNeame_Eng}</h2>
                </div>
                <div className='priceDiv'>
                 <span className='BottlePrice'>
                 <LiquorIcon className='cardLogos' style={{margin:'0px 5px'}} />
                  {props.wine.BottlePrice3}
                </span>
                {props.wine.Cup_Y_N_==='Y' && <span className='BottlePrice'>
                    <WineBarIcon className='cardLogos' />
                    {props.wine.CupPrice}</span>}
                </div>
            </div>
            <div className='card2-right' > 
            <span>Country: {props.wine.CountryName}</span>
                <span>Type: {getTypes(props.wine.Type_R_W_B_)}</span>
                <span>Dry/Sweet: {getDryness(props.wine.Dry_y_n_)}</span>              
            <div className='card2-button'>                
                    <Link to={`/dishPage/${props.wine.Id}`} className='linkWithoutSpace' style={{ textDecoration: 'none' }}  >
                        <Button size="small" className='linkWithoutSpace' >Go to Wine</Button>
                    </Link>
                </div>
            </div>
            <div className={`card2-imageDiv ${isImageClicked ? 'slide' : ''}`} onClick={handleImageClick}>
                <div>
                <InfoTwoToneIcon style={{zIndex:1, position:'absolute', top:5, right:5, color:'#000'}}/>
                <img src={props.image} alt={`${props.title} image missing`} className="card2image" />
                </div>
            </div>
        </div>
    );
}