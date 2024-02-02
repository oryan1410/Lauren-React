import React, { useState, useEffect } from 'react';
import BeerCard from '../HelpComponents/BeerCard';
import CigarCard from '../HelpComponents/CigarCard';
import '../App.css';
import '../styles/Wines.css'
import { Container } from 'react-bootstrap';
import SearchAppBar from '../SearchAppBar';
import { useUserContext } from '../UserContext';
import { styled } from '@mui/material/styles';
import { t } from 'i18next';

const Cigars = () => {
    const { cigars, isLoading } = useUserContext();
    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [noneFound, setNoneFound] = useState(false);
    const [displayDishes, setDisplayDishes] = useState([]);

    useEffect(() => {
        if (!isLoading && cigars.length !== 0) {
            setIsVisible(true);
            let beer = cigars.map((cigar) => {
                return <CigarCard key={cigar.IdCigar} alcohol={cigar} title={cigar.Name_Eng} />
            });
            setDisplayDishes(beer);
        }
    }, [isLoading, cigars]);

    useEffect(() => {
        if (searchQuery === "") {
            setNoneFound(false);
            if (cigars.length === 0) {
                setDisplayDishes(cigars);
            } else {
                let arr = cigars.map((cigar) => {
                    return <CigarCard key={cigar.IdCigar} cigar={cigar} title={cigar.Name_Eng} />
                });
                setDisplayDishes(arr);
            }
        } else {
            setNoneFound(false);
            let arr1 = cigars.filter((cigar) => cigar.Name_Eng.toLowerCase().includes(searchQuery.toLowerCase()));
            let arr2 = cigars.filter((cigar) => cigar.Name_Heb.includes(searchQuery));
            let arr4 = arr1.concat(arr2);
            arr4 = [...new Set(arr4)]
            if (arr4.length !== 0) {
                let arr = arr4.map((cigar) => {
                    return <CigarCard key={cigar.IdCigar} cigar={cigar} title={cigar.Name_Eng} />
                });
                setDisplayDishes(arr);
            } else {
                setDisplayDishes([]);
                setNoneFound(true);
            }
        }
    }, [searchQuery]);

    const setSearch = (e) => {
        console.log('setSearchWines');
        setSearchQuery(e);
    }

    return (
        <Container style={{ width: '100%', justifyContent: 'center', paddingBottom:'3.5rem' }}>
            <div className={`home ${isVisible ? 'visible' : 'notVisible'}`} role="main">
                <h1 className="homeTitle">{t("Cigars")}</h1>
                <SearchAppBar label='cigars' searchFunc={setSearch} />

                {searchQuery === '' ? (
                    <div>
                        {cigars.map((cigar) => (
                            <CigarCard key={cigar.IdCigar} cigar={cigar} title={cigar.Name_Eng} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <h2>Search Results:</h2>
                        {displayDishes}
                    </div>
                )}

                {noneFound && <h1>No Results Found</h1>}
            </div>
        </Container>
    );
};

export default Cigars;
