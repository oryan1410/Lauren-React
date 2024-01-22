
import React from 'react'
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import '../styles/DishCard.css'

export default function TempDishCard(props) {
    const { t } = useTranslation();

    const { dish } = props;
    const { language } = useUserContext();


    const getDishType = () => {
        if (language === 'heb') {
            if (dish.IngType === 'Meat') {
                return 'בשרי'
            }
            else if (dish.IngType === 'Dairy') {
                return 'חלבי'
            }
            else if (dish.IngType === 'Parve') {
                return 'פרווה'
            }
            else if (dish.IngType === 'Fish') {
                return 'דגים'
            }
            else if (dish.IngType === 'Vegan') {
                return 'טבעוני'
            }
            else if (dish.IngType === 'Vegetarian') {
                return 'צמחוני'
            }
            else if (dish.IngType === 'Gluten Free') {
                return 'ללא גלוטן'
            }
            else if (dish.IngType === 'Vegiterian') {
                return 'צמחוני'
            }
        }
        else {
            return dish.IngType;
        }
    }


    return (
        <div className={`dishCardDiv ${!dish.inStock && 'dishoutOfStock'}`} key={dish.IdDish} tabIndex={0}>
            {!dish.inStock && <div className="dish-out-of-stock-text">{t('OutOfStock')}</div>}
            <div className='dishTitlesDiv'>
                <span className='dishCardTitle'>{dish.Name_Eng}</span>
                <span className='dishCardTitle hebTitle'>{dish.Name_Heb}</span>
            </div>
            <div className='line'></div>
            {language === 'heb' ? <span className='dishCardSubtitle hebSubtitle'>{dish.Desc_Heb}</span> : <span className='dishCardSubtitle'>{dish.Desc_Eng}</span>}
            <div className='line'></div>
            <div className='attributesDiv'>
                <div className='dishpriceDiv'>
                    <span className='dishCardPrice'>₪{dish.CPrice}</span>
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