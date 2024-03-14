import * as React from 'react';
import Button from '@mui/material/Button';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import WineBarIcon from '@mui/icons-material/WineBar';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import LiquorIcon from '@mui/icons-material/Liquor';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/WineCard.css'
import { useUserContext } from '../UserContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GiGlassShot } from "react-icons/gi";
import { FaWhiskeyGlass } from "react-icons/fa6";
import { GiBrandyBottle } from "react-icons/gi";
import LocalBarIcon from '@mui/icons-material/LocalBar';


export default function SpritzCard(props) {
    const [isImageClicked, setImageClicked] = useState(false);
    const { language } = useUserContext();
    const { t } = useTranslation();

    let screenWidth = window.innerWidth;

    const handleImageClick = () => {
        if (props.alcohol.inStock !== false) {
            setImageClicked(!isImageClicked);
        }
    };


    return (
        <div className={`cardTwo ${props.alcohol.inStock === false && 'outOfStock'}`} tabIndex={0}>
            {props.alcohol.inStock === false && <div className="out-of-stock-text">{t('OutOfStock')}</div>}
            <div className={`spritzCard-Left`}>
                <div className='card2-titleDiv'>
                    <h1 className='card2-title' tabIndex={0}>{props.title.length > 18 ? props.title.substring(0, 15) + '...' : props.title}</h1><h1 className='card2-title hebTitle' tabIndex={0}>{props.alcohol.Name_Heb.length > 20 ? props.alcohol.Name_Heb.substring(0, 15) + '...' : props.alcohol.Name_Heb}</h1>
                </div>
                {/*line seperatoe to seperate the divs */}
                <div className='line'></div>
                {/* <div className='card2-subTitleDiv'>
                    {screenWidth > 600 ? <span className='card2-Subtitle'>{props.alcohol.WineryName_Eng} || {props.alcohol.WineryName_Heb} </span> :
                        <><span className='card2-Subtitle'>{props.alcohol.WineryName_Eng}</span>
                            <span className='card2-Subtitle hebSubTitle'>  {props.alcohol.WineryName_Heb}</span>
                        </>}
                </div> */}
                <div className='priceDiv'>
                    {props.alcohol.CPrice!=="0" && props.alcohol.CPrice!==0 &&
                    <div className='bottlePriceDiv'>
                        <h2 className='BottlePrice'>
                            <LocalBarIcon className='cardLogos' style={{ margin: '0px 5px', fontSize:'1.3rem' }} />
                        </h2>
                        <h2 className='bottlePriceText' aria-label={`Shot price ${props.alcohol.CPrice}`}>
                        ₪{props.alcohol.CPrice}
                        </h2>
                    </div>}
                </div>
            </div>
            <div className='spritzCard-right' >
            <img src={props.alcohol.ImageUrl} alt={`${props.title} bottle image`} className="spritzCardImage" />

              </div>
            {/* <div className={`card2-imageDiv ${isImageClicked ? 'slide' : ''}`} onClick={handleImageClick}>
                <div>
                    <InfoTwoToneIcon className='infoIcon' />
                    <img src={props.alcohol.ImageUrl} alt={`${props.title} bottle image`} className="card2image" />
                </div>
            </div> */}
        </div>
    );
}