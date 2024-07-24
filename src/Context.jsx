import { useContext, createContext, useState } from "react";


const AppContext = createContext();

// const matchMedia = window.matchMedia().matches;
// console.log(matchMedia);

export const AppProvider = ({ children }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [search, setSearch] = useState('cat')
    const ToggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme')

    }

    return <AppContext.Provider value={{ isDarkTheme, ToggleDarkTheme, search, setSearch }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);
