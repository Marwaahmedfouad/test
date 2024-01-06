import React, { useEffect, useState } from 'react';
import { themes } from '../data';
import ThemeItem from '../components/ThemeItem';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './Themes.css'

const getStorageColor=()=>{
    let color='red';
    if (localStorage.getItem('color')) {
        color=localStorage.getItem('color');
    }
    return color;
};

const getStorageTheme =()=>{
let theme='light-theme';
if (localStorage.getItem('theme')) {
    theme=localStorage.getItem('theme');
}
return theme;
};

function Themes() {
    const [showSwitcher, setShowSwitcher] = useState(false);
    /*color*/
    // const [color, setColor] = useState('red');
    const [color, setColor] = useState(getStorageColor());

    const changeColor = (color) => {
        setColor(color)
    }
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color',color);
        localStorage.setItem('color',color);
    },[color])
/********************************************************************************/
    /*light&&dark*/
    // const [theme, setTheme] = useState('light-theme');
    const [theme, setTheme] = useState(getStorageTheme());
    const toggleTheme = () => {
        if (theme=='light-theme') {
            setTheme('dark-theme')
        }else{
            setTheme('light-theme')
        }
    }
    useEffect(() => {
        document.documentElement.className =theme;
        localStorage.getItem('theme',theme)
    },[theme]);

    return (
        <>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                    <FaCog />
                </div>

                <div className="theme__toggler" onClick={toggleTheme}>
                   {theme === 'light-theme'  ? <BsMoon /> : <BsSun/>}
                </div>

                <h3 className="style__switcher-title">Style Switcher</h3>
                <div className="style__switcher-items">
                    {themes.map((theme, index) => { return (<ThemeItem key={index} {...theme} changeColor={changeColor} />); })}
                </div>

                <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>&times;</div>
            </div>
        </>
    )
}

export default Themes
