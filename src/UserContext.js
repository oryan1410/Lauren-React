import React, { useState, useEffect, createContext, useContext } from 'react'
import wines from './WinesArr.json'
import i18next from 'i18next'
import { db } from './firebase_setup/firebase'
import { query, getDocs,collection, onSnapshot, addDoc, where } from 'firebase/firestore'



const UserContext = createContext()
const UserUpdateContext = createContext()

export function useUserContext() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {

    const [redWines, setRedWines] = useState([]);
    const [whiteWines, setWhiteWines] = useState([]);
    const [roseWines, setRoseWines] = useState([]);
    const [bubbleWines, setBubbleWines] = useState([]);
    const [bestOfWines, setBestOfWines] = useState([]);

    const [alcoholArr, setAlcoholArr] = useState([]);
    const [whiskeyArr, setWhiskeyArr] = useState([]);
    const [americanArr, setAmericanArr] = useState([]);
    const [smokedArr, setSmokedArr] = useState([]);
    const [coniacArr, setConiacArr] = useState([]);
    const [vodkaArr, setVodkaArr] = useState([]);
    const [rumArr, setRumArr] = useState([]);
    const [ginArr, setGinArr] = useState([]);
    const [taquillaArr, setTaquillaArr] = useState([]);
    const [apperativoArr, setApperativoArr] = useState([]);
    const [anisArr, setAnisArr] = useState([]);
    const [cocktailsArr, setCocktailsArr] = useState([]);
    const [beerArr, setBeerArr] = useState([]);


    const [countries, setCountries] = useState([]);
    const [countriesHeb, setCountriesHeb] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [language, setLanguage] = useState('heb');
    const [winesArr, setWinesArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [navBarVisable, setNavBarVisable] = useState(true);
    
    
    const [dishesArr, setDishesArr] = useState([]);
    const [easyArr, setEasyArr] = useState([]);
    const [nextToWineArr, setNextToWineArr] = useState([]);
    const [forTheHungryArr, setForTheHungryArr] = useState([]);
    const [dessertsArr, setDessertsArr] = useState([]);

    function getFilters() {
        console.log('getFilters');
        // // filter wines according to type
        // let red = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Re');
        // setRedWines(red);
        // let white = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Wh');
        // setWhiteWines(white);
        // let rose = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Ro');
        // setRoseWines(rose);
        // let bubble = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Bu');
        // setBubbleWines(bubble);
        // get all country names, making sure there are no duplicates
        let countries = wines.map((wine) => wine.Country_Eng);
        let countriesHeb = wines.map((wine) => wine.Country_Heb);
        countries = [...new Set(countries)];
        setCountries(countries);
        countriesHeb = [...new Set(countriesHeb)];
        setCountriesHeb(countriesHeb);
    }

    function getFavorites() {
        let favor = JSON.parse(localStorage.getItem('Favorites'))
        setFavorites(favor)
    }

    
    function addFavorite(favor) {
        let favorArr= []
        if(favorites){
            favorArr =  [...favorites, favor]
        }
        else{
            favorArr = [favor]
        }
        localStorage.setItem('Favorites', JSON.stringify(favorArr))
        setFavorites(favorArr)
    }

    function removeFavorite(favor) {
        let favorArr =favorites.filter(favorite => favorite !== favor)
        localStorage.setItem('Favorites', JSON.stringify(favorArr))
        setFavorites(favorArr)
    }

    function setUserLanguage(language) {
        setLanguage(language);
        localStorage.setItem('language', JSON.stringify(language));
        i18next.changeLanguage(language);
    }


    useEffect(() => {
        getFilters();
        getFavorites();
        if (localStorage.getItem('language')) {
            setLanguage(JSON.parse(localStorage.getItem('language')));
            i18next.changeLanguage(JSON.parse(localStorage.getItem('language')));
        }
        else {
            setLanguage('heb');
            i18next.changeLanguage('heb');
        }
        const tempNames = query(collection(db,'Wines'),where('onMenu','==','Y'));
        setIsLoading(true);

        const getNames= onSnapshot(tempNames, (snapshot) => {
            let countries = [];
            let countriesHeb = [];           
            let redArr = [];
            let whiteArr = [];
            let roseArr = [];
            let bubbleArr = [];
            let bestOfArr = [];
            setWinesArr(snapshot.docs.map((doc) => {
                let wine={};
                wine.Id=doc.data().Id;
                wine.Name_Heb=doc.data().Name_Heb;
                wine.Name_Eng=doc.data().Name_Eng;
                wine.Country_Eng=doc.data().Country_Eng;
                wine.Country_Heb=doc.data().Country_Heb;
                wine.Type_Ro_Re_Wh_Bu_=doc.data().Type_Ro_Re_Wh_Bu_;
                wine.Dry_Y_N_=doc.data().Dry_Y_N_;
                wine.Price=doc.data().Price;
                wine.Cup_Y_N_=doc.data().Cup_Y_N_;
                wine.CupPrice=doc.data().CupPrice;
                wine.BottlePrice=doc.data().BottlePrice;
                wine.Grape_Eng=doc.data().Grape_Eng;
                wine.Blend_Y_N_=doc.data().Blend_Y_N_;
                wine.Grape_Heb=doc.data().Grape_Heb;
                wine.ImageUrl=doc.data().ImageUrl;
                wine.WineryName_Heb=doc.data().WineryName_Heb;
                wine.WineryName_Eng=doc.data().WineryName_Eng;
                wine.Desc_Heb=doc.data().Desc_Heb;
                wine.Desc_Eng=doc.data().Desc_Eng;
                wine.inStock=doc.data().inStock;
                wine.bestOf=doc.data().bestOf;
                if (doc.data().Type_Ro_Re_Wh_Bu_ === 'Re' && doc.data().bestOf !== true) {
                    redArr.push(wine)
                }
                if (doc.data().Type_Ro_Re_Wh_Bu_ === 'Wh' && doc.data().bestOf !== true) {
                    whiteArr.push(wine)
                }
                if (doc.data().Type_Ro_Re_Wh_Bu_ === 'Ro' && doc.data().bestOf !== true) {
                    roseArr.push(wine)
                }
                if (doc.data().Type_Ro_Re_Wh_Bu_ === 'Bu' && doc.data().bestOf !== true) {
                    bubbleArr.push( wine)
                }
                if(doc.data().bestOf === true ){
                    bestOfArr.push(wine)
                }
                countries.push(wine.Country_Eng);
                countriesHeb.push(wine.Country_Heb);
                return wine;
            }))
            setRedWines(redArr);
            setWhiteWines(whiteArr);
            setRoseWines(roseArr);
            setBubbleWines(bubbleArr);
            setBestOfWines(bestOfArr);
            countries = [...new Set(countries)];
            setCountries(countries);
            countriesHeb = [...new Set(countriesHeb)];
            setCountriesHeb(countriesHeb);
        }
        )


        const dishQuery= query(collection(db,'Dishes'),where('onMenu','==','Y'));
        const getDishes= onSnapshot(dishQuery, (snapshot) => {
            let appArr=[];
            let mainArr=[];
            let dessertArr=[];
            let forTheHungryArr=[];

            setDishesArr(snapshot.docs.map((doc) => {
                let dish={};
                dish.IdDish=doc.data().IdDish;
                dish.Name_Heb=doc.data().Name_Heb;
                dish.Name_Eng=doc.data().Name_Eng;
                dish.Type=doc.data().Type;
                dish.ImageUrl=doc.data().ImageUrl;
                dish.Desc_Heb=doc.data().Desc_Heb;
                dish.Desc_Eng=doc.data().Desc_Eng;
                dish.CPrice=doc.data().CPrice;
                dish.IngType=doc.data().IngType;
                dish.inStock=doc.data().inStock;
                dish.onMenu=doc.data().onMenu;


                if (dish.Type === 'Easy Snack') {
                    appArr.push(dish)
                }
                if (dish.Type === 'Next to Wine') {
                    mainArr.push(dish)
                }
                if (dish.Type === 'For The Hungry') {
                    forTheHungryArr.push(dish)
                }
                if (dish.Type === 'Dessert') {
                    dessertArr.push(dish)
                }             

                return dish;
            })
            )
            setIsLoading(false);
            setEasyArr(appArr);
            setNextToWineArr(mainArr);
            setForTheHungryArr(forTheHungryArr);
            setDessertsArr(dessertArr);
        }
        )

        const alcoholQuery= query(collection(db,'Alcohol'),where('onMenu','==','Y'));
        const getAlcohol= onSnapshot(alcoholQuery, (snapshot) => {
            let alcoholArr=[];
            let whiskeyArr=[];
            let AmericanArr=[];
            let smokedArr=[];
            let vodkaArr=[];
            let coniacArr=[];
            let rumArr=[];
            let ginArr= [];
            let taquillaArr=[];
            let apperativoArr=[];
            let anisArr=[];
            let cocktailsArr=[];
            let beerArr=[];

            setAlcoholArr(snapshot.docs.map((doc) => {
                let alcohol={};
                alcohol.IdAlc=doc.data().IdAlc;
                alcohol.ImageUrl=doc.data().ImageUrl;
                alcohol.Name_Heb=doc.data().Name_Heb;
                alcohol.Name_Eng=doc.data().Name_Eng;
                alcohol.Type=doc.data().Type;
                alcohol.ImageUrl=doc.data().ImageUrl;
                alcohol.Desc_Heb=doc.data().Desc_Heb;
                alcohol.Desc_Eng=doc.data().Desc_Eng;
                alcohol.CPrice=doc.data().CPrice;
                alcohol.inStock=doc.data().inStock;
                alcohol.onMenu=doc.data().onMenu;
                alcoholArr.push(alcohol)
                if (alcohol.Type === 'Whiskey') {
                    whiskeyArr.push(alcohol)
                }
                if (alcohol.Type==='American'){
                    AmericanArr.push(alcohol)
                }
                if (alcohol.Type === 'Smoked') {
                    smokedArr.push(alcohol)
                }                    
                if (alcohol.Type === 'Vodka') {
                    vodkaArr.push(alcohol)
                }
                if (alcohol.Type === 'Coniac') {
                    coniacArr.push(alcohol)
                }
                if (alcohol.Type === 'Rum') {
                    rumArr.push(alcohol)
                }
                if (alcohol.Type === 'Gin') {
                    ginArr.push(alcohol)
                }
                if (alcohol.Type === 'Tequila') {
                    taquillaArr.push(alcohol)
                }
                if (alcohol.Type === 'Apperativo') {
                    apperativoArr.push(alcohol)
                }
                if (alcohol.Type === 'Anis') {
                    anisArr.push(alcohol)
                }
                if (alcohol.Type === 'Cocktail') {
                    cocktailsArr.push(alcohol)
                }
                if (alcohol.Type === 'Beer') {
                    beerArr.push(alcohol)
                }
                return alcohol;
            })
            )
            setIsLoading(false);
            setAlcoholArr(alcoholArr);
            setWhiskeyArr(whiskeyArr);
            setAmericanArr(AmericanArr);
            setSmokedArr(smokedArr);
            setVodkaArr(vodkaArr);
            setConiacArr(coniacArr);
            setRumArr(rumArr);
            setGinArr(ginArr);
            setTaquillaArr(taquillaArr);
            setApperativoArr(apperativoArr);
            setAnisArr(anisArr);
            setBeerArr(beerArr);
            setCocktailsArr(cocktailsArr);

        }
        )

        //add docs to collection- all wine Arr
        
        


        return () => {
            console.log('cleanup')
            getNames()
            getDishes();
        };

    }, []);


    const addDocToFiresore = async () => {
        await wines.forEach((wine) => {
            addDoc(collection(db, "Wines"), {
                Id: wine.Id,
                Name_Heb: wine.Name_Heb,
                Name_Eng: wine.Name_Eng,
                Country_Eng: wine.Country_Eng,
                Country_Heb: wine.Country_Heb,
                Type_Ro_Re_Wh_Bu_: wine.Type_Ro_Re_Wh_Bu_,
                Dry_Y_N_: wine.Dry_Y_N_,
                Price: wine.Price,
                Cup_Y_N_: wine.Cup_Y_N_,
                CupPrice: wine.CupPrice,
                BottlePrice: wine.BottlePrice,
                Grape_Eng: wine.Grape_Eng,
                Blend_Y_N_: wine.Blend_Y_N_,
                Grape_Heb: wine.Grape_Heb,
                ImageUrl: wine.ImageUrl,
                WineryName_Heb: wine.WineryName_Heb,
                WineryName_Eng: wine.WineryName_Eng,
                Desc_Heb: wine.Desc_Heb,
                Desc_Eng: wine.Desc_Eng,
            })
        })
    }


    useEffect(() => {
        console.log("dishesArr",dishesArr)
    }, [dishesArr])

    useEffect(() => {
        console.log("easyArr",easyArr)
    }, [easyArr])

    useEffect(() => {
        console.log("nextToWineArr",nextToWineArr)
    }, [nextToWineArr])

    useEffect(() => {
        console.log("forTheHungryArr",forTheHungryArr)
    }, [forTheHungryArr])

    useEffect(() => {
        console.log("bestOf",bestOfWines)
    }, [bestOfWines])

    useEffect(() => {
        console.log("alc",alcoholArr)
    }, [alcoholArr])


    const value = {
        redWines,
        whiteWines,
        roseWines,
        bubbleWines,
        bestOfWines,
        countries,
        getFilters,
        favorites,
        addFavorite,
        removeFavorite,getFavorites,
        language,setUserLanguage,
        countriesHeb,
        winesArr,
        // getWinesArr,
        isLoading,
        addDocToFiresore,
        navBarVisable, setNavBarVisable,
        dishesArr, easyArr, nextToWineArr, dessertsArr, forTheHungryArr,
        alcoholArr, whiskeyArr,americanArr,smokedArr, coniacArr, vodkaArr, rumArr, ginArr, taquillaArr, apperativoArr, anisArr, cocktailsArr,beerArr
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;