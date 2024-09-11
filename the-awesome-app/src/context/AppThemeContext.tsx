'use client'
import React, { useState } from "react";

type AppThemeState = {
    mode: string;
    updateMode?: React.Dispatch<React.SetStateAction<string>>
}

export const initialThemeState: AppThemeState = {
    mode: 'dark'
}

export const AppThemeContext = React.createContext(initialThemeState);

export function AppThemeContextProvider(props: {children: Readonly<React.ReactNode>}){

    const [mode, updateMode] = useState(initialThemeState.mode);

    return (
        <AppThemeContext.Provider value={{mode, updateMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}