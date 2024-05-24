import react from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserContext } from '../UserContext';
import '../styles/DishCard.css'


export default function NewDishCard(props) {

    const { language } = useUserContext();


    const dish = props.dish

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
        <div className='dishCardDiv'>
            <div className='newDishCardTitle'>{language==='heb'? dish.Name_Heb: dish.Name_Eng}</div>
            <div className='line'></div>
            <div className='dishCardBodyDiv'>
            <div className={`newDishCardDesc`}>
                <span className={`newDishCardDesc  ${language==='heb' && 'newDishCardDescHeb'}` }>{language==='heb'? dish.Desc_Heb: dish.Desc_Eng}</span>
            </div>
            <div className='dishCradRightDiv'>
            <img className='dishCardImg' variant="top" src={dish.ImageUrl} />
            </div>
            </div>
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
    );
};
