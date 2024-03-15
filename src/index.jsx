import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {LangProvider} from "./context/LangProvider.jsx"

import './i18n.js'
import {Suspense} from "react"

ReactDOM.createRoot(document.getElementById('root')).render(
    <LangProvider>
        <Suspense fallback={<p>Loading...</p>}>
            <App />
        </Suspense>
    </LangProvider>
)
