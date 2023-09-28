import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import '../App.css';
import { useLocation } from 'react-router-dom';


const DishPage = (props) => {

    const location = useLocation();
    const propsData = location.state;


    const [selectedDryness, setSelectedDryness] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isVisible, setIsVisable] = useState(false);

    useEffect(() => {
        setIsVisable(true);
        console.log ("propsData",propsData.wine);
        return () => {
            setIsVisable(false);
        }
    }
    ,[]);

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

    const wines = [
        { name: 'Wine 1', dryness: 'dry', color: 'red', country: 'france' },
        { name: 'Wine 2', dryness: 'sweet', color: 'white', country: 'italy' },
        { name: 'Wine 3', dryness: 'dry', color: 'rose', country: 'spain' },
        { name: 'Wine 4', dryness: 'sweet', color: 'bubble', country: 'usa' },
    ];

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

    return (
        <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
            <h1>Dishes</h1>
            <Card key={propsData.wine.Id} wine={propsData.wine} title={propsData.wine.Name_Eng} image={propsData.wine.ImageUrl} Description={propsData.wine.Description} />            
        </div>
    );
};

export default DishPage;
