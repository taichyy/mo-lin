"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()

// This is basically just creating a component
// Dont think too hard
export const ThemeProvider = ({children}) => {

    // Define a variable(using hook)
    const [mode, setMode] = useState("dark")
    // Define a function
    const toggle = () => {
        setMode((prev) => (prev==="dark" ? "light" : "dark"));
    }

    return (
        // Output the variable and function as props
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}