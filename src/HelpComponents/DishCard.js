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
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LiquorIcon from '@mui/icons-material/Liquor';
import '../styles/DishCard.css'

export default function DishCard(props) {
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
            <div className={`DishCardContent`}>
                <div>
                    <h1 className='DishCard-title'>{props.dish.Name_Eng}<br />{props.dish.Name_Heb}</h1>
                </div>
                <div>
                    {/* <span className='DishCard-Subtitle'> {props.dish.WineryNeame_Eng} || {props.dish.WineryName_Heb} </span> */}

                </div>
                <div className='DishpriceDiv'>
                    <span className='DishPrice'>
                        <RestaurantIcon className='DishcardLogos' style={{ margin: '0px 5px' }} />
                        {props.dish.CPrice}
                    </span>
                </div>
            </div>
            <div className='DishCard-right' >
                {/*a different way to view the details- with the seperation lines in an specific place */}
                <div className='DishCard-details'>
                    <span className='DishCard-span DishCard-HebText'>{props.dish.Description_Heb.substring(0, 30)}...</span>
                    <span className='DishCard-span DishCard-EngText'>{props.dish.Description_Eng.substring(0, 30)}...</span>
                </div>
                {/* <div className='DishCard-details'>
                    <span className='DishCard-span DishCard-leftText'>{getTypesHeb(props.dish.Type_R_W_B_)}</span>
                    <span>||</span>
                    <span className='DishCard-span DishCard-rightText'>{getTypes(props.dish.Type_R_W_B_)}</span></div>
                <div className='DishCard-details'>
                    <span className='DishCard-span DishCard-leftText'>{getDrynessHeb(props.dish.Dry_y_n_)}</span>
                    <span>||</span>
                    <span className='DishCard-span DishCard-rightText'>{getDryness(props.dish.Dry_y_n_)}</span></div> */}
                {/* <span className='DishCard-details'>{props.dish.CountryName} || {props.dish.Country_Heb}</span>
                <span className='DishCard-details'>{getTypes(props.dish.Type_R_W_B_)} || {getTypesHeb(props.dish.Type_R_W_B_)}</span>
                <span className='DishCard-details'>{getDryness(props.dish.Dry_y_n_)} || {getDrynessHeb(props.dish.Dry_y_n_)}</span>               */}
                <div className='DishCard-button'>
                    <Link to={`/dishPage/${props.dish.Id}`} className='linkWithoutSpace' style={{ textDecoration: 'none' }}  >
                        <Button size="small" className='linkWithoutSpace' onClick={(e)=>{e.target.blur()}} >For more details</Button>
                    </Link>
                </div>
            </div>
            <div className={`DishCard-imageDiv ${isImageClicked ? 'slide' : ''}`} onClick={handleImageClick}>
                <div>
                    <InfoTwoToneIcon style={{ zIndex: 1, position: 'absolute', top: 5, right: 5, color: '#000' }} />
                    <img src={props.image} alt={`${props.title} image missing`} className="DishCardimage" />
                </div>
            </div>
        </div>
    );
}