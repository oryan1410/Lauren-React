import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import '../App.css';


const Wines = () => {
    const [selectedDryness, setSelectedDryness] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isVisible, setIsVisable] = useState(false);

    useEffect(() => {
        setIsVisable(true);
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
            <h1>Wines</h1>
            <Card />
            <Card />
            <Card />
            {/* <Grid columns={3}>
                <Grid.Column>
                    <Dropdown
                        placeholder="Select Dryness"
                        fluid
                        selection
                        options={drynessOptions}
                        onChange={(e, { value }) => setSelectedDryness(value)}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Dropdown
                        placeholder="Select Color"
                        fluid
                        selection
                        options={colorOptions}
                        onChange={(e, { value }) => setSelectedColor(value)}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Dropdown
                        placeholder="Select Country"
                        fluid
                        selection
                        options={countryOptions}
                        onChange={(e, { value }) => setSelectedCountry(value)}
                    />
                </Grid.Column>
            </Grid>
            <Card.Group>
                {filteredWines.map((wine) => (
                    <Card key={wine.name}>
                        <Card.Content>
                            <Card.Header>{wine.name}</Card.Header>
                            <Card.Meta>{wine.color} - {wine.dryness} - {wine.country}</Card.Meta>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group> */}
        </div>
    );
};

export default Wines;
