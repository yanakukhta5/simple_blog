import React, {useContext} from "react";

import {ThemeContext} from "../providers/ThemeContextProvider"

export function useTheme(){
 const theme = useContext(ThemeContext)
 return theme
}