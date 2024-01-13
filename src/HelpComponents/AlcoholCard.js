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

export default function AlcoholCard(props) {
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
                    <div className='bottlePriceDiv'>
                        <h2 className='BottlePrice'>
                            <LocalDrinkIcon className='cardLogos' style={{ margin: '0px 5px' }} />
                        </h2>
                        <h2 className='bottlePriceText' aria-label={`Shot price ${props.alcohol.CPrice}`}>
                        ₪{props.alcohol.CPrice}
                        </h2>
                    </div>
                    {props.alcohol.chaser === "Yes" && <div className='cupPriceDiv'><span className='BottlePrice'>
                        <WineBarIcon className='cardLogos' /></span>
                        <span className='bottlePriceText' aria-label={`chaser price ${props.alcohol.chaserPrice}`}>{props.alcohol.chaserPrice}₪</span></div>}
                </div>
            </div>
            <div className='card2-right' >
                {/*a different way to view the details- with the seperation lines in an specific place */}
                {/* <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{props.alcohol.Country_Heb}</span>
                    <span>||</span>
                    <span className='card2-span card2-rightText'>{props.alcohol.Country_Eng}</span>
                </div> */}
                {/* <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{getTypesHeb(props.alcohol.Type_Ro_Re_Wh_Bu_)}</span>
                    <span>||</span>
                    <span className='card2-span card2-rightText'>{getTypes(props.alcohol.Type_Ro_Re_Wh_Bu_)}</span>
                </div> */}
                {/* <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{getDrynessHeb(props.alcohol.Dry_Y_N_)}</span>
                    <span>||</span>
                    <span className='card2-span card2-rightText'>{getDryness(props.alcohol.Dry_Y_N_)}</span>
                </div> */}
                {/* <div className='card2-details'>
                    {props.alcohol.Blend_Y_N_ === 'Y' ? <span className='card2-span card2-blentText'>blend</span> : <><span className='card2-span card2-leftText'>{props.alcohol.Grape_Heb[0]}</span>
                        <span>||</span>
                        <span className='card2-span card2-rightText'>{props.alcohol.Grape_Eng[0]}</span></>}
                </div> */}
                {/* <span className='card2-details'>{props.alcohol.CountryName} || {props.alcohol.Country_Heb}</span>
                <span className='card2-details'>{getTypes(props.alcohol.Type_Ro_Re_Wh_Bu_)} || {getTypesHeb(props.alcohol.Type_Ro_Re_Wh_Bu_)}</span>
                <span className='card2-details'>{getDryness(props.alcohol.Dry_y_n_)} || {getDrynessHeb(props.alcohol.Dry_y_n_)}</span>               */}
                {/* <div className='card2-button'>
                    <Link to={`/winePage/${props.alcohol.Id}`} className='linkWithoutSpace' style={{ textDecoration: 'none' }}  >
                        <Button sx={{
                            color: 'white',
                            borderRadius: '16px!important',
                            fontFamily: 'Urbanist', textTransform: 'none',
                            '&:hover ': { backgroundColor: '#917F6B', boxShadow: '0 0 0 2px #000' },
                            '&:focus': {
                                outline: 'none'
                            }
                        }} size="small" className='linkWithoutSpace' onClick={(e) => { e.target.blur() }} >Go to Wine</Button>
                    </Link>
                </div> */}
                <div className='card2-details'>
                    <span className={`card2-span card2-leftText ${language==='heb' && 'AlchebText'} `} tabIndex={0}>{language==='heb'?props.alcohol.Desc_Heb: props.alcohol.Desc_Eng}</span>
                    </div>
            </div>
            <div className={`card2-imageDiv ${isImageClicked ? 'slide' : ''}`} onClick={handleImageClick}>
                <div>
                    <InfoTwoToneIcon className='infoIcon' />
                    <img src={props.alcohol.ImageUrl} alt={`${props.title} bottle image`} className="card2image" />
                </div>
            </div>
        </div>
    );
}