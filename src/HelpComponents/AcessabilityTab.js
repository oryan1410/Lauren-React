import React, { useState, useRef, useEffect } from 'react';

const AccessibilityTab = (props) => {
    const [expanded, setExpanded] = useState(false);
    const expandRef = useRef(null);

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
                left: 0, // Updated to position on the right side
                bottom: '10%',
                backgroundColor: '#f1f1f1',
                borderRadius: '5px',
                zIndex: 90,
                transition: 'height 0.3s ease-in-out, width 0.3s ease-in-out', // Updated to include width
            }}
        >
            {!expanded && (
                <button onClick={toggleExpanded}>
                    <img
                        src='../../Images/accesability_icon.png'
                        alt="Accessibility Icon"
                        style={{ width: '50px', height: '50px' }}
                    />
                </button>
            )}

            {expanded && (
                <div className='accesablilityTab' ref={expandRef}>
                    <button onClick={toggleExpanded} className='acessablityXbutton'>
                        X
                    </button>
                    <h3>Accessibility Options</h3>
                    {/* <label>
                        Font Size:
                        <input type="range" min="12" max="24" />
                    </label> */}
                    <button onClick={props.increaseFontSize}>Increase Font Size</button>
                    <button onClick={props.decreaseFontSize}>Decrease Font Size</button>
                    <button onClick={props.highContrast}>High Contrast</button>
                    {/* <button onClick={props.lowContrast}>Low Contrast</button> */}
                    <button onClick={props.brightMode}>Bright Mode</button>
                    <button onClick={props.darkMode}>Dark Mode</button>
                    <button onClick={props.markLinks}>Mark Links</button>
                    <button onClick={props.readableFonts}>Readable Fonts</button>
                    <button onClick={props.resetAccessibility}>Reset</button>

                    {/* Add more accessibility options here */}
                </div>
            )}
        </div>
    );
};

export default AccessibilityTab;
