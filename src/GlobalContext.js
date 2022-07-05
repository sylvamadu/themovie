import React,{useState, createContext} from 'react';


export const GlobalContext = createContext()

export function GlobalContextProvider ({children}){

    // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('statusMode',isDarkTheme)
  };
    // Define theme settings
const light = {
    palette: {
      mode: "light",
      background:{
        main: 'yellow',
        default: '#f7f7f7',
        paper: 'white'
      },
      text:{
        primary: '#rgba(0, 0, 0, 0.6)'
      }
    },
  };
  
  const dark = {
    palette: {
      mode: "dark",
      background:{
        main: 'blue',
        default: '#626262',
        paper: '#363636'
      },
      text:{
        primary: 'rgba(255, 255, 255, 0.38)'
      }
    },
  };

    return(
        <GlobalContext.Provider value={{
            light, dark, isDarkTheme, setIsDarkTheme, changeTheme
        }}>{
            children
        }
        </GlobalContext.Provider>
    )
}