import React, { useState, useEffect, createContext, useContext, useRef } from 'react'
import wines from './WinesArr.json'


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
        // filter wines according to type
        let red = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Re');
        setRedWines(red);
        let white = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Wh');
        setWhiteWines(white);
        let rose = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Ro');
        setRoseWines(rose);
        let bubble = wines.filter((wine) => wine.Type_Ro_Re_Wh_Bu_ === 'Bu');
        setBubbleWines(bubble);
        // get all country names, making sure there are no duplicates
        let countries = wines.map((wine) => wine.Country_Eng);
        countries = [...new Set(countries)];
        setCountries(countries);
    }


    const value = {
        redWines,
        whiteWines,
        roseWines,
        bubbleWines,
        countries,
        getFilters 
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;