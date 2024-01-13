import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AccessibilityTab = (props) => {
    const [expanded, setExpanded] = useState(false);
    const expandRef = useRef(null);
    const { t } = useTranslation();

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const handleClickOutside = (event) => {
        if (expandRef.current && !expandRef.current.contains(event.target)) {
            setExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                right: 0, // Updated to position on the right side
                bottom: '10%',
                backgroundColor: '#f1f1f1',
                borderRadius: '5px',
                zIndex: 90,
                transition: 'right 0.3s ease-in-out', // Updated to include only right transition
            }}
        >
            {!expanded && (
                <button onClick={toggleExpanded}>
                    <img
                        src='../../Images/accesability_icon.png'
                        alt={'Accessibility Icon'}
                        style={{ width: '50px', height: '50px' }}
                    />
                </button>
            )}

            {expanded && (
                <div className='accesablilityTab' ref={expandRef}>
                    <button onClick={toggleExpanded} className='acessablityXbutton' alt={t('Open Accessibility Menu')}>
                        X
                    </button>
                    <h3>{t('Accessibility Options')}</h3>
                    {/* <label>
                        Font Size:
                        <input type="range" min="12" max="24" />
                    </label> */}
                    <button onClick={props.increaseFontSize} alt={t('Increase Font Size')}>
                        {t('Increase Font Size')}
                    </button>
                    <button onClick={props.decreaseFontSize} alt={t('Decrease Font Size')}>
                        {t('Decrease Font Size')}
                    </button>
                    <button onClick={props.highContrast}>{t('High Contrast')}</button>
                    {/* <button onClick={props.lowContrast}>Low Contrast</button> */}
                    <button onClick={props.brightMode}>{t('Bright Mode')}</button>
                    {/* <button onClick={props.darkMode}>Dark Mode</button> */}
                    <button onClick={props.markLinks}>{t('Mark Links')}</button>
                    <button onClick={props.readableFonts}>{t('Readable Fonts')}</button>
                    <button onClick={props.resetAccessibility}>{t('Reset')}</button>

                    {/* Add more accessibility options here */}
                </div>
            )}
        </div>
    );
};

export default AccessibilityTab;
