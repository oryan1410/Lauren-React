import * as React from 'react';
import Button from '@mui/material/Button';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import WineBarIcon from '@mui/icons-material/WineBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/WineCard.css'
import { useUserContext } from '../UserContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function BeerCard(props) {
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
            <div className={`card2Content`}>
                <div className='card2-titleDiv'>
                    <span className='card2-title' tabIndex="0">{props.title.length > 18 ? props.title.substring(0, 15) + '...' : props.title}</span><span className='card2-title hebTitle' tabIndex="0">{props.alcohol.Name_Heb.length > 20 ? props.alcohol.Name_Heb.substring(0, 15) + '...' : props.alcohol.Name_Heb}</span>
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
                    <div className='bottlePriceDiv'>
                        <span className='BottlePrice'>
                            <SportsBarIcon className='cardLogos' style={{ margin: '0px 5px' }} />
                        </span>
                        <span aria-label={`Price: ${props.alcohol.CPrice} shekels..`} className='bottlePriceText' tabIndex="0">
                        ₪{props.alcohol.CPrice}
                        </span>
                    </div>
                   
                </div>
            </div>
            <div className='card2-right' >
                <div className='card2-details'>
                    <span className={`beerCard-span beerCard-leftText ${language==='heb' && 'AlchebText'} `} tabIndex="0">{language==='heb'?props.alcohol.Desc_Heb: props.alcohol.Desc_Eng}</span>
                    </div>
            </div>
            <div className={`card2-imageDiv ${isImageClicked ? 'slide' : ''}`} onClick={handleImageClick}>
                <div>
                    <InfoTwoToneIcon className='infoIcon' />
                    <img src={props.alcohol.ImageUrl} alt={`${props.title} bottle image.. press for more info`} className="card2image" />
                </div>
            </div>
        </div>
    );
}