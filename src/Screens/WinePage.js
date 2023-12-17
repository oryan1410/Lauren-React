import React, { useState, useEffect } from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';
import wines from '../WinesArr.json'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../styles/WinePage.css'
import { CircleFlag } from 'react-circle-flags';
import LiquorIcon from '@mui/icons-material/Liquor';
import WineBarIcon from '@mui/icons-material/WineBar';
import { useUserContext } from '../UserContext';
import { useTranslation } from 'react-i18next';


const WinePage = ({ match }) => {

    const { id } = useParams();
    const { t } = useTranslation();

    // const id = match.params.id;

    // const location = useLocation();
    // const wineId= props.match.params;    

    const [isVisible, setIsVisable] = useState(false);
    const [propsData, setPropsData] = useState({});

    const { language, setUserLanguage, winesArr, isLoading } = useUserContext();

    const setDataForPage = (winesArr) => {
        let data = winesArr.find((wine) => wine.Id == id);
        console.log(data);
        if (!data) {
            data = winesArr[0];
        }
        setPropsData(data);
        setIsVisable(true);
    }
    
    
    useEffect(() => {
        // console.log(idd);
        console.log(id)
        window.scrollTo(0, 0);
        if (!isLoading){
            console.log('not loading');
            console.log(winesArr);
            setDataForPage(winesArr);
        }
        // console.log(winesArr);
        // let data = winesArr.find((wine) => wine.Id === id);
        // console.log(data);
        // if (!data) {
        //     data = winesArr[0];
        // }
        // setPropsData(data);
        // // return () => {
        //     setIsVisable(false);
        // }
    }
        , [winesArr, isLoading]);

    // const wines = [
    //     { name: 'Wine 1', dryness: 'dry', color: 'red', country: 'france' },
    //     { name: 'Wine 2', dryness: 'sweet', color: 'white', country: 'italy' },
    //     { name: 'Wine 3', dryness: 'dry', color: 'rose', country: 'spain' },
    //     { name: 'Wine 4', dryness: 'sweet', color: 'bubble', country: 'usa' },
    // ];

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
                <div className='winePage'>
                    <div className='winePageTitleDiv'>
                        <span className='winePageTitleText engPageTitle'>{propsData.Name_Eng}</span>
                        <span className='winePageTitleText hebPageTitle'>{propsData.Name_Heb}</span>
                    </div>
                    <div className='DishPageImageDiv'>
                        <img className='DishPageImage' src={propsData.ImageUrl} alt={propsData.Name_Eng} />
                        <div className='wineInfoPrice bottlePrice'>
                        <LiquorIcon className='cardLogos' style={{ margin: '0px 5px' }} />
                        <span>{propsData.BottlePrice}</span>
                    </div>
                    {propsData.Cup_Y_N_ === 'Y' ?
                        <div className='wineInfoPrice cupPrice'>
                            <WineBarIcon className='cardLogos' style={{ margin: '0px 5px' }} />
                            <span>{propsData.CupPrice}</span>
                        </div> : null
                    }
                    </div>
                    {/* <div className='languageIconWinePageDiv'>
                        <CircleFlag
                            countryCode={'il'}
                            className='langIcon'
                            alt={'Hebrew'}
                            onClick={() => setUserLanguage('heb')}
                            style={{
                                boxShadow: language === 'heb' ? '0px 0px 30px #917F6B' : 'none',
                            }}
                        />
                        <CircleFlag
                            countryCode={'us'}
                            alt={'English'}
                            className='langIcon'
                            onClick={() => setUserLanguage('eng')}
                            style={{
                                boxShadow: language === 'eng' ? '0px 0px 30px #917F6B' : 'none',
                            }}
                        />
                    </div> */}
                    <div className='winePageInfo'>                    
                        <span className='winePageTitleText wineInfoTitle'>{t("WineInfo")}</span>
                        <div className='wineInfo'>                            
                            <p className={`wineInfoText ${ language==='heb'? 'hebWineInfo': 'engWineInfo'} `}>{language==='heb'? propsData.Country_Heb: propsData.Country_Eng} - {language==='heb'?  propsData.WineryName_Heb : propsData.WineryName_Eng}</p>
                        </div>
                        <div className='wineInfo'>
                            <p className={`wineInfoText ${ language==='heb'? 'hebWineInfo': 'engWineInfo'} `}>{language==='heb'? getTypesHeb(propsData.Type_Ro_Re_Wh_Bu_) : getTypes(propsData.Type_Ro_Re_Wh_Bu_)} - {language==='heb'? getDrynessHeb(propsData.Dry_Y_N_): getDryness(propsData.Dry_Y_N_)}</p>
                        </div>
                        <div className='wineInfo'>
                            <p className='wineInfoText pricetext'>{propsData.BottlePrice}</p>
                        </div>
                    </div>
                    <div className='descDiv'>

                        <div className={`descText ${language === 'heb' ? 'hebDesc' : 'engDesc'}`} >
                            <p >{language === 'heb' ? propsData.Desc_Heb : propsData.Desc_Eng}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WinePage;
