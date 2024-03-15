import './Home.scss'

const HomeHero = () => {
    return (
        <section className='hero grid-center'>
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__titles">
                        <h2 className='title'>Special care best medical</h2>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur autem maxime quo temporibus ullam.</p>
                    </div>
                    <a className="hero__btn btn" href='/#contact'>Contact us</a>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
