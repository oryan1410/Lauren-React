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

export default function CigarCard(props) {
    const [isImageClicked, setImageClicked] = useState(false);
    const { language } = useUserContext();
    const { t } = useTranslation();

    let screenWidth = window.innerWidth;

    const handleImageClick = () => {
        if (props.cigar.inStock !== false) {
            setImageClicked(!isImageClicked);
        }
    };


    return (
        <div className={`cardTwo ${props.cigar.inStock === false && 'outOfStock'}`} tabIndex={0}>
            {props.cigar.inStock === false && <div className="out-of-stock-text">{t('OutOfStock')}</div>}
            <div className={`card2Content`}>
                <div className='card2-titleDiv'>
                    <h1 tabIndex={0} className='card2-title'>{props.title.length > 18 ? props.title.substring(0, 15) + '...' : props.title}</h1><h1 tabIndex={0} className='card2-title hebTitle'>{props.cigar.Name_Heb.length > 20 ? props.cigar.Name_Heb.substring(0, 15) + '...' : props.cigar.Name_Heb}</h1>
                </div>
                {/*line seperatoe to seperate the divs */}
                <div className='line'></div>
                {/* <div className='card2-subTitleDiv'>
                    {screenWidth > 600 ? <span className='card2-Subtitle'>{props.cigar.WineryName_Eng} || {props.cigar.WineryName_Heb} </span> :
                        <><span className='card2-Subtitle'>{props.cigar.WineryName_Eng}</span>
                            <span className='card2-Subtitle hebSubTitle'>  {props.cigar.WineryName_Heb}</span>
                        </>}
                </div> */}
                <div className='priceDiv'>
                    <div className='bottlePriceDiv'>
                        <span className='bottlePriceText' aria-label={`Cigar price: ${props.cigar.CPrice}`} tabIndex={0}>
                        ₪{props.cigar.CPrice}
                        </span>
                    </div>
                </div>
            </div>
            <div className='card2-right' >
                <div className='card2-details'>
                    <span className={`beerCard-span beerCard-leftText ${language==='heb' && 'AlchebText'} `}>{language==='heb'?props.cigar.Desc_Heb: props.cigar.Desc_Eng}</span>
                    </div>
            </div>
            <div className={`card2-imageDiv ${isImageClicked ? 'slide' : ''}`} onClick={handleImageClick}>
                <div>
                    <InfoTwoToneIcon alt='infoIcon- press to move image and reveal info' className='infoIcon' />
                    <img src={props.cigar.ImageUrl} alt={`${props.title} bottle image. press to move image and reveal info`} className="card2image" />
                </div>
            </div>
        </div>
    );
}