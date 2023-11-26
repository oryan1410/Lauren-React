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

    // useEffect(() => {
    //     // getFilters();
    //     // filter wines according to type
    //     let red = wines.filter((wine) => wine.Type_R_W_B_ === 'R');
    //     setRedWines(red);
    //     let white = wines.filter((wine) => wine.Type_R_W_B_ === 'W');
    //     setWhiteWines(white);
    //     let rose = wines.filter((wine) => wine.Type_R_W_B_ === 'Rose');
    //     setRoseWines(rose);
    //     let bubble = wines.filter((wine) => wine.Type_R_W_B_ === 'B');
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
        let red = wines.filter((wine) => wine.Type_R_W_B_ === 'R');
        setRedWines(red);
        let white = wines.filter((wine) => wine.Type_R_W_B_ === 'W');
        setWhiteWines(white);
        let rose = wines.filter((wine) => wine.Type_R_W_B_ === 'Rose');
        setRoseWines(rose);
        let bubble = wines.filter((wine) => wine.Type_R_W_B_ === 'B');
        setBubbleWines(bubble);
        // get all country names, making sure there are no duplicates
        let countries = wines.map((wine) => wine.CountryName);
        countries = [...new Set(countries)];
        console.log(countries);
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