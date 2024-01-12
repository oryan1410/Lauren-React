import * as React from 'react';
import Button from '@mui/material/Button';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import WineBarIcon from '@mui/icons-material/WineBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/WineCard.css'
import { useUserContext } from '../UserContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '@mui/icons-material';

export default function RecipeReviewCard2(props) {
    const [isImageClicked, setImageClicked] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const { addFavorite, removeFavorite, favorites, getFavorites, language } = useUserContext();
    const { t } = useTranslation();

    let screenWidth = window.innerWidth;

    const handleImageClick = () => {
        if (props.wine.inStock !== false) {
            setImageClicked(!isImageClicked);
        }
    };

    const getTypes = (type) => {
        if (type === 'Re') {
            return 'Red';
        }
        if (type === 'Wh') {
            return 'White';
        }
        if (type === 'Bu') {
            return 'Bubble';
        }
        if (type === 'Ro') {
            return 'Rose';
        }
    }

    const getTypesHeb = (type) => {
        if (type === 'Re') {
            return 'אדום';
        }
        if (type === 'Wh') {
            return 'לבן';
        }
        if (type === 'Bu') {
            return 'מבעבע';
        }
        if (type === 'Ro') {
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

    const setAsFavorite = (event) => {
        event.stopPropagation();
        if (props.wine.inStock !== false) {
            if (isFavorite) {
                removeFavorite(props.wine.Id);
            }
            else {
                addFavorite(props.wine.Id);
            }
            setIsFavorite(!isFavorite);
        }
    }

    useEffect(() => {
        if (favorites && favorites.includes(props.wine.Id)) {
            setIsFavorite(true);
        }
        else {
            setIsFavorite(false);
        }
    }, [favorites])


    return (
        <div className={`cardTwo ${props.wine.inStock === false && 'outOfStock'}`}>
            {props.wine.inStock === false && <div className="out-of-stock-text">{t('OutOfStock')}</div>}
            <div className={`card2Content`}>
                <div className='card2-titleDiv'>
                    <span className='card2-title'>{props.title.length > 18 ? props.title.substring(0, 15) + '...' : props.title}</span><span className='card2-title hebTitle'>{props.wine.Name_Heb.length > 20 ? props.wine.Name_Heb.substring(0, 15) + '...' : props.wine.Name_Heb}</span>
                </div>
                {/*line seperatoe to seperate the divs */}
                <div className='line'></div>
                <div className='card2-subTitleDiv'>
                    {screenWidth > 600 ? <span className='card2-Subtitle'>{props.wine.WineryName_Eng} | {props.wine.WineryName_Heb} </span> :
                        <><span className='card2-Subtitle'>{props.wine.WineryName_Eng.length> 25 ? `${props.wine.WineryName_Eng.substring(0, 25)}...`:props.wine.WineryName_Eng}</span>
                            <span className='card2-Subtitle hebSubTitle'>  {props.wine.WineryName_Heb.length> 27 ? `${props.wine.WineryName_Heb.substring(0, 25)}...`:props.wine.WineryName_Heb}</span>
                        </>}
                </div>
                <div className='priceDiv'>
                    <div className='bottlePriceDiv'>
                        <span className='BottlePrice'>
                            <LiquorIcon className='cardLogos' style={{ margin: '0px 5px' }} />
                        </span>
                        <span className='bottlePriceText'>
                            {props.wine.BottlePrice}
                        </span>
                    </div>
                    {props.wine.Cup_Y_N_ === 'Y' && <div className='cupPriceDiv'><span className='BottlePrice'>
                        <WineBarIcon className='cardLogos' /></span>
                        <span className='bottlePriceText'>{props.wine.CupPrice}</span></div>}
                </div>
            </div>
            <div className='card2-right' >
                {/*a different way to view the details- with the seperation lines in an specific place */}
                <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{props.wine.Country_Heb}</span>
                    <span>|</span>
                    <span className='card2-span card2-rightText'>{props.wine.Country_Eng}</span>
                </div>
                <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{getTypesHeb(props.wine.Type_Ro_Re_Wh_Bu_)}</span>
                    <span>|</span>
                    <span className='card2-span card2-rightText'>{getTypes(props.wine.Type_Ro_Re_Wh_Bu_)}</span>
                </div>
                <div className='card2-details'>
                    <span className='card2-span card2-leftText'>{getDrynessHeb(props.wine.Dry_Y_N_)}</span>
                    <span>|</span>
                    <span className='card2-span card2-rightText'>{getDryness(props.wine.Dry_Y_N_)}</span>
                </div>
                <div className='card2-details'>
                    {props.wine.Blend_Y_N_ === 'Y' ? <span className='card2-span card2-blentText'>{language==='en'? 'blend':'בלנד'}</span> :
                        <>
                            {/* <span className='card2-span card2-leftText'>{props.wine.Grape_Heb[0]}</span> */}
                            <span className='card2-span card2-grape'>{language!=='en' ? props.wine.Grape_Heb[0]:props.wine.Grape_Eng[0]}</span>
                            {/* <span className='card2-span card2-rightText'>{props.wine.Grape_Eng[0]}</span> */}
                        </>
                    }
                </div>
                {/* <span className='card2-details'>{props.wine.CountryName} | {props.wine.Country_Heb}</span>
                <span className='card2-details'>{getTypes(props.wine.Type_Ro_Re_Wh_Bu_)} | {getTypesHeb(props.wine.Type_Ro_Re_Wh_Bu_)}</span>
                <span className='card2-details'>{getDryness(props.wine.Dry_y_n_)} | {getDrynessHeb(props.wine.Dry_y_n_)}</span>               */}
                <div className='card2-button'>
                    <Link to={`/winePage/${props.wine.Id}`} className='linkWithoutSpace' style={{ textDecoration: 'none', marginTop:'5px' }}  >
                        <Button sx={{
                            color: 'white',
                            borderRadius: '16px!important',
                            fontFamily: 'Urbanist', textTransform: 'none',
                            '&:focus': {
                                outline: 'none'
                            },
                            
                        }} size="small" className='linkWithoutSpace' onClick={(e) => { e.target.blur() }} >Go to Wine</Button>
                    </Link>
                </div>
            </div>
            <div className={`card2-imageDiv ${isImageClicked ? 'slide' : ''}`} onClick={handleImageClick}>
                <div>
                    <InfoTwoToneIcon className='infoIcon' />
                    <FavoriteIcon onClick={setAsFavorite} className={`favoriteIcon ${isFavorite && 'isFavorite'}`} />
                    <img src={props.image} alt={`${props.title} bottle image`} className="card2image" />
                </div>
            </div>
        </div>
    );
}