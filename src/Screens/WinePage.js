import React, { useState, useEffect } from 'react';
import Card from '../HelpComponents/Card';
import '../App.css';
import { useLocation } from 'react-router-dom';
import wines from '../WinesArr.json'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../styles/WinePage.css'
import { CircleFlag } from 'react-circle-flags';



const WinePage = ({ match }) => {

    const { id } = useParams();

    // const id = match.params.id;

    // const location = useLocation();
    // const wineId= props.match.params;    




    const [selectedDryness, setSelectedDryness] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isVisible, setIsVisable] = useState(false);
    const [propsData, setPropsData] = useState({});
    const [language, setLanguage] = useState('heb');

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisable(true);
        let data = wines.find((wine) => wine.Id == id);
        if (!data) {
            data = wines[0];
        }
        setPropsData(data);
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

    function getTypesHeb(type) {
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

    function getDryness(dryness) {
        if (dryness === 'Y') {
            return 'Dry';
        }
        if (dryness === 'N') {
            return 'Semi-Sweet';
        }
    }

    function getDrynessHeb(dryness) {
        if (dryness === 'Y') {
            return 'יבש';
        }
        if (dryness === 'N') {
            return 'חצי-מתוק';
        }
    }

    return (
        <Container>
            <div className={`home ${isVisible ? 'visible' : 'notVisable'}`}>
                {/* <Card key={propsData.Id} wine={propsData} title={propsData.Name_Eng} image={propsData.ImageUrl} Description={propsData.Description} />             */}
                <div className='DishPageWine'>
                    <h1>{propsData.Name_Eng}</h1>
                    <h2>{propsData.Name_Heb}</h2>
                    <div className='DishPageImageDiv'>
                        <img className='DishPageImage' src={propsData.ImageUrl} alt={propsData.Name_Eng} />
                    </div>
                    <div className='DishPageWineInfo'>
                        <h1>Wine Info</h1>
                        <div className='wineInfo'><p className='wineInfoText left'>{propsData.WineryName_Heb}</p> <p className='wineInfoSeperator'>||</p> <p className='wineInfoText right'>{propsData.WineryName_Eng}</p></div>
                        <div className='wineInfo'><p className='wineInfoText left'>{propsData.Country_Heb}</p> <p className='wineInfoSeperator'>||</p> <p className='wineInfoText right'>{propsData.Country_Eng}</p></div>
                        <div className='wineInfo'><p className='wineInfoText left'>{propsData.Region_Heb}</p> <p className='wineInfoSeperator'>||</p>  <p className='wineInfoText right'>{propsData.Region_Eng}</p></div>
                        <div className='wineInfo'><p className='wineInfoText left'>{getDrynessHeb(propsData.Dry_Y_N_)}</p> <p className='wineInfoSeperator'>||</p> <p className='wineInfoText right'>{getDryness(propsData.Dry_Y_N_)}</p></div>
                        <div className='wineInfo'><p className='wineInfoText left'>{getTypesHeb(propsData.Type_Ro_Re_Wh_Bu_)}</p> <p className='wineInfoSeperator'>||</p> <p className='wineInfoText right'>{getTypes(propsData.Type_Ro_Re_Wh_Bu_)}</p> </div>
                        {/* <p className='wineInfo'>Grape: {propsData.Grape}</p> */}
                        <div className='wineInfo'><p className='wineInfoText'>{propsData.BottlePrice}</p></div>
                    </div>
                    <div className='languageIcon'>
                        <CircleFlag
                            countryCode={'il'}
                            alt={'Hebrew'}
                            onClick={() => setLanguage('heb')}
                            style={{
                                borderRadius: '50%',
                                boxShadow: language === 'heb' ? '0px 0px 30px #917F6B' : 'none',
                            }}
                        />
                        <CircleFlag
                            countryCode={'us'}
                            alt={'English'}
                            onClick={() => setLanguage('eng')}
                            style={{
                                boxShadow: language === 'eng' ? '0px 0px 30px #917F6B' : 'none',
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                    <div className={`${language === 'heb' ? 'hebDesc' : 'engDesc'}`} >
                        <p >{language === 'heb' ? propsData.Desc_Heb : propsData.Desc_Eng}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WinePage;
