import React, { useContext, useState } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    return (
        <AppContext.Provider
        value={{
            closeMenu,
            openMenu,
            isMenuOpen
        }}
        >
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }