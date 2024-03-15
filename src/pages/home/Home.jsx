import HomeHero from "./HomeHero.jsx"
import HomeDoctors from "./HomeDoctors.jsx"
import HomeAbout from "./HomeAbout.jsx"
import HomeServices from "./HomeServices.jsx"
import HomeContact from "./HomeContact.jsx"


const Home = () => {
    return (
        <div className='home'>
            <HomeHero/>
            <HomeAbout />
            <HomeServices />
            <HomeDoctors />
            <HomeContact />
        </div>
    )
}

export default Home