
import React from 'react'
import { useUserContext } from '../UserContext';


export default function TempDishCard(props) {

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

    const getDishKosher = () => {
        if (language === 'heb') {
            if (dish.Kosher) {
                return 'כשר'
            }
            else {
                return 'לא כשר'
            }
        }
        else {
            if (dish.Kosher) {
                return 'Kosher'
            }
            else {
                return 'Not Kosher'
            }
        }
    }



    return (
        <div className='dishCardDiv' key={dish.IdDish}>
            <div className='dishTitlesDiv'>
                <span className='dishCardTitle'>{dish.Name_Eng}</span>
                <span className='dishCardTitle hebTitle'>{dish.Name_Heb}</span>
            </div>
            <div className='line'></div>
            {language === 'heb' ? <span className='dishCardSubtitle hebSubtitle'>{dish.Description_Heb}</span> : <span className='dishCardSubtitle'>{dish.Description_Eng}</span>}
            <div className='line'></div>
            <div className='attributesDiv'>
                <div className='dishpriceDiv'>
                    <span className='dishCardSubtitle'>{dish.CPrice}₪</span>
                </div>
                <div className='kosherDiv'>
                    <span className='kosherText'>{getDishKosher()}</span>
                </div>
                <div className='typeDiv'>
                    <span className='kosherText'>{getDishType()}</span>
                </div>
            </div>


        </div>
    )
}