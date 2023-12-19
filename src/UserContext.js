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
    const [countries, setCountries] = useState([]);
    const [countriesHeb, setCountriesHeb] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [language, setLanguage] = useState('heb');
    const [winesArr, setWinesArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [navBarVisable, setNavBarVisable] = useState(true);
    
    //     // getFilters();
    //     // filter wines according to type
    //     let red = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'R');
    //     setRedWines(red);
    //     let white = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'W');
    //     setWhiteWines(white);
    //     let rose = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Rose');
    //     setRoseWines(rose);
    //     let bubble = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'B');
    //     setBubbleWines(bubble);        
    //     // get all country names, making sure there are no duplicates
    //     let countries = wines.map((wine) => wine.CountryName);
    //     countries = [...new Set(countries)];
    //     console.log(countries);
    //     setCountries(countries);

    // }, []);




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

    // async function getWinesArr(winesArr) {
    //     const tempNames = query(collection(db,'Wines'));
    //     const Names= getDocs(tempNames);
    //     const nameArr= []
    //     Names.then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             let wine={};
    //             wine.Id=doc.data().Id;
    //             wine.Name_Heb=doc.data().Name_Heb;
    //             wine.Name_Eng=doc.data().Name_Eng;
    //             wine.Country_Eng=doc.data().Country_Eng;
    //             wine.Country_Heb=doc.data().Country_Heb;
    //             wine.Type_Ro_Re_Wh_Bu_=doc.data().Type_Ro_Re_Wh_Bu_;
    //             wine.Dry_Y_N_=doc.data().Dry_Y_N_;
    //             wine.Price=doc.data().Price;
    //             wine.Cup_Y_N_=doc.data().Cup_Y_N_;
    //             wine.CupPrice=doc.data().CupPrice;
    //             wine.BottlePrice=doc.data().BottlePrice;
    //             wine.Grape_Eng=doc.data().Grape_Eng;
    //             wine.Blend_Y_N_=doc.data().Blend_Y_N_;
    //             wine.Grape_Heb=doc.data().Grape_Heb;
    //             wine.ImageUrl=doc.data().ImageUrl;
    //             wine.WineryName_Heb=doc.data().WineryName_Heb;
    //             wine.WineryName_Eng=doc.data().WineryName_Eng;
    //             wine.Desc_Heb=doc.data().Desc_Heb;
    //             wine.Desc_Eng=doc.data().Desc_Eng;
    //             nameArr.push(wine);
    //         });
    //     });
    //     await setIsLoading(false);
    //     setWinesArr(nameArr);
        
    // }

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
            let redArr = [];
            let whiteArr = [];
            let roseArr = [];
            let bubbleArr = [];
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
                
                if (doc.data().Type_Ro_Re_Wh_Bu_ === 'Re') {
                    redArr.push(wine)
                }
                if (doc.data().Type_Ro_Re_Wh_Bu_ === 'Wh') {
                    whiteArr.push(wine)
                }
                if (doc.data().Type_Ro_Re_Wh_Bu_ === 'Ro') {
                    roseArr.push(wine)
                }
                if (doc.data().Type_Ro_Re_Wh_Bu_ === 'Bu') {
                    bubbleArr.push( wine)
                }
                return wine;
            }))
            setRedWines(redArr);
            setWhiteWines(whiteArr);
            setRoseWines(roseArr);
            setBubbleWines(bubbleArr);
            setIsLoading(false);
        }
        )

        //add docs to collection- all wine Arr
        
        


        return () => {
            console.log('cleanup')
            getNames()};

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


    const value = {
        redWines,
        whiteWines,
        roseWines,
        bubbleWines,
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
        navBarVisable, setNavBarVisable
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;