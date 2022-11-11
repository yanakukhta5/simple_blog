import React, {useState} from "react";

export const ThemeContext = React.createContext( {theme: 'light' } )

export function ThemeContextProvider(props){
 const [currentTheme, setCurrentTheme] = useState('light')
  return (
    <ThemeContext.Provider value={ {theme: currentTheme, setCurrentTheme} }>
      {props.children}
    </ThemeContext.Provider>
  )
}

