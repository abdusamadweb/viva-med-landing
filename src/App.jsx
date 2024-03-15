// global styles
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './App.scss'

import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import {useLayoutEffect} from "react"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import {Toaster} from "react-hot-toast"
import Page404 from "./components/404/Page404.jsx"
import Footer from "./components/footer/Footer.jsx"
import Vacancy from "./pages/vacancy/Vacancy.jsx"


const Wrapper = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
}


const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Wrapper>

                    <Header />

                    <Routes>

                        <Route path='/' element={<Home />} />
                        <Route path='/vacancy' element={<Vacancy />} />

                        {/* 404 */}
                        <Route path='/*' element={<Page404 />}/>

                    </Routes>

                    <Footer />

                    <Toaster
                        containerClassName="toast"
                        position="top-center"
                        reverseOrder={false}
                    />

                </Wrapper>
            </BrowserRouter>
        </div>
    )
}

export default App