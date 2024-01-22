
import React from 'react'
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';
import { use } from 'i18next';
import { useEffect } from 'react';
import '../styles/DishCard.css'

export default function TempCocktailCard(props) {
    const { t } = useTranslation();

    const { alcohol } = props;
    const { language } = useUserContext();




    return (
        <div className={`dishCardDiv ${!alcohol.inStock && 'dishoutOfStock'}`} key={alcohol.IdAlc} tabIndex={0}>
            {!alcohol.inStock && <div className="dish-out-of-stock-text">{t('OutOfStock')}</div>}
            <div className='dishTitlesDiv'>
                <span className='dishCardTitle'>{alcohol.Name_Eng}</span>
                <span className='dishCardTitle hebTitle'>{alcohol.Name_Heb}</span>
            </div>
            <div className='line'></div>
            {language === 'heb' ? <span className='dishCardSubtitle hebSubtitle'>{alcohol.Desc_Heb}</span> : <span className='dishCardSubtitle'>{alcohol.Desc_Eng}</span>}
            <div className='line'></div>
            <div className='attributesDiv'>
                <div className='dishpriceDiv'>
                    <span className='dishCardPrice' aria-label={`.Price ${alcohol.CPrice}`}>₪{alcohol.CPrice}</span>
                </div>
                {/* <div className='kosherDiv'>
                    <span className='kosherText'>{getDishKosher()}</span>
                </div> */}
            </div>


        </div>
    )
}