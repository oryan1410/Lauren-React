import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import '../App.css';
import { useLocation } from 'react-router-dom';
import wines from '../WinesArr.json'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const DishPage = ({ match }) => {

    const { id } = useParams();

    // const id = match.params.id;

    // const location = useLocation();
    // const wineId= props.match.params;    




    const [selectedDryness, setSelectedDryness] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isVisible, setIsVisable] = useState(false);
    const [propsData, setPropsData] = useState({});

    useEffect(() => {
        setIsVisable(true);
        console.log("id", id);
        let data = wines.find((wine) => wine.Id == id);
        if (!data) {
            data = wines[0];
        }
        setPropsData(data);
        console.log("propsData", data);
        return () => {
            setIsVisable(false);
        }
    }
        , []);

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
            <div className='DishPageWine'>
            <h1>{propsData.Name_Eng}</h1>
            <h2>{propsData.Name_Heb}</h2>
                <div className='DishPageImage'>
                    <img className='DishPageImage' src={propsData.ImageUrl} alt={propsData.Name_Eng} />
                </div>
                <div className='DishPageWineInfo'>
                    <h1>Wine Info</h1>
                    <h2>Winery: {propsData.WineryNeame_Eng}</h2>
                    <h2>Winery Country: {propsData.CountryName}</h2>
                    <h2>Region: {propsData.Region}</h2>
                    <h2>Dryness: {getDryness(propsData.Dry_y_n_)}</h2>
                    <h2>Type: {getTypes(propsData.Type_R_W_B_)}</h2>
                    <h2>Grape: {propsData.Grape}</h2>
                    <h2>Price: {propsData.BottlePrice3}</h2>
                </div>
                <div className='DishPageWineText' style={{backgroundColor:'red'}}>       
                   <p >{propsData.Description}</p>
               </div>
            </div>


        </div>
        </Container>
    );
};

export default DishPage;
