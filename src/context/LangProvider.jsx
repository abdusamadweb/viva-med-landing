import { createContext, useContext, useState } from 'react'
import {userLang} from "../api/apiResp.js";

const LangContext = createContext(undefined)

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(userLang)

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => {
    const context = useContext(LangContext)
    if (!context) {
        throw new Error('useLang must be used within a LangProvider')
    }
    return context
}