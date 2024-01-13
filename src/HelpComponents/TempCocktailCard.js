
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


    const getDishType = () => {
        if (language === 'heb') {
            if (alcohol.IngType === 'Meat') {
                return 'בשרי'
            }
            else if (alcohol.IngType === 'Dairy') {
                return 'חלבי'
            }
            else if (alcohol.IngType === 'Parve') {
                return 'פרווה'
            }
            else if (alcohol.IngType === 'Fish') {
                return 'דגים'
            }
            else if (alcohol.IngType === 'Vegan') {
                return 'טבעוני'
            }
            else if (alcohol.IngType === 'Vegetarian') {
                return 'צמחוני'
            }
            else if (alcohol.IngType === 'Gluten Free') {
                return 'ללא גלוטן'
            }
            else if (alcohol.IngType === 'Vegiterian') {
                return 'צמחוני'
            }
        }
        else {
            return alcohol.IngType;
        }
    }


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
                    <span className='dishCardSubtitle' aria-label={`.Price ${alcohol.CPrice}`}>₪{alcohol.CPrice}</span>
                </div>
                {/* <div className='kosherDiv'>
                    <span className='kosherText'>{getDishKosher()}</span>
                </div> */}
                <div className='typeDiv'>
                    <span className='dishCardType'>{getDishType()}</span>
                </div>
            </div>


        </div>
    )
}