import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import '../styles/DishPage.css';
import { useLocation } from 'react-router-dom';
import wines from '../WinesArr.json'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import dishes from '../DishesArr.json'
import { useTranslation } from 'react-i18next';
import {useUserContext} from '../UserContext';


const DishesPage = ({ match }) => {

    const { id } = useParams();
    const { t } = useTranslation();
    const {language} = useUserContext();


    // const id = match.params.id;

    // const location = useLocation();
    // const wineId= props.match.params;    




    const [selectedDryness, setSelectedDryness] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isVisible, setIsVisable] = useState(false);
    const [propsData, setPropsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if(!isLoading){
        setIsVisable(true);
        console.log("id", id);
        let data = dishes.find((dish) => dish.IdDish == id);
        if (!data) {
            data = dishes[0];
        }
        setPropsData(data);
        console.log("propsData", data);
        return () => {
            setIsVisable(false);
        }
    }
    }
        , [isLoading]);

    const drynessOptions = [
        { key: 'dry', text: 'Dry', value: 'dry' },
        { key: 'sweet', text: 'Sweet', value: 'sweet' },
    ];

    const colorOptions = [
        { key: 'red', text: 'Red', value: 'red' },
        { key: 'white', text: 'White', value: 'white' },
        { key: 'rose', text: 'Rose', value: 'rose' },
        { key: 'bubble', text: 'Bubble', value: 'bubble' },
    ];

    const countryOptions = [
        { key: 'france', text: 'France', value: 'france' },
        { key: 'italy', text: 'Italy', value: 'italy' },
        { key: 'spain', text: 'Spain', value: 'spain' },
        { key: 'usa', text: 'USA', value: 'usa' },
    ];

    // const wines = [
    //     { name: 'Wine 1', dryness: 'dry', color: 'red', country: 'france' },
    //     { name: 'Wine 2', dryness: 'sweet', color: 'white', country: 'italy' },
    //     { name: 'Wine 3', dryness: 'dry', color: 'rose', country: 'spain' },
    //     { name: 'Wine 4', dryness: 'sweet', color: 'bubble', country: 'usa' },
    // ];

    const filteredWines = wines.filter((wine) => {
        if (selectedDryness && wine.dryness !== selectedDryness) {
            return false;
        }
        if (selectedColor && wine.color !== selectedColor) {
            return false;
        }
        if (selectedCountry && wine.country !== selectedCountry) {
            return false;
        }
        return true;
    });

    function getTypes(type) {
        if (type === 'R') {
            console.log('Red');
            return 'Red';
        }
        if (type === 'W') {
            return 'White';
        }
        if (type === 'B') {
            return 'Bubble';
        }
        if (type === 'Rose') {
            return 'Rose';
        }
    }

    function getDryness(dryness) {
        if (dryness === 'Y') {
            return 'Dry';
        }
        if (dryness === 'N') {
            return 'Sweet';
        }
    }

    return (
        <Container>
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
            {/* <Card key={propsData.Id} wine={propsData} title={propsData.Name_Eng} image={propsData.ImageUrl} Description={propsData.Description} />             */} 
            <div className='DishPage'>
                <div className='dishPageTitleDiv'>
            <span className='dishPageTitleText engPageTitle'>{propsData.Name_Eng}</span>
            <span className='dishPageTitleText hebPageTitle'>{propsData.Name_Heb}</span>
            </div>
                <div className='DishPageImage'>
                    <img className='DishPageImage' src={propsData.ImageUrl} alt={propsData.Name_Eng} />
                </div>
                <div className={`DishPageInfo ${language==='heb' &&'hebDishInfo'}`}>
                    <div className={`priceAndType ${language==='heb' &&'hebpriceAndType'}`}>
                    <span className={`dishType ${language==="heb" &&'hebDishTitle'}`}>{language!=='heb'? propsData.dishType:'מנה'}</span>
                    <span className={`dishSeperator`}>||</span>
                    <span className={`dishPrice`}>₪{propsData.CPrice}</span>
                    </div>
                    <div className={`dishDescription ${language==='heb' &&'hebDishDescription'}`}>
                    <span>{language==='heb'? propsData.Description_Heb: propsData.Description_Eng}</span>
                    </div>
                </div>
                <div className='DishPageWineText' style={{backgroundColor:'red'}}>       
                   <p >{propsData.Description}</p>
               </div>
            </div>


        </div>
        </Container>
    );
};

export default DishesPage;
