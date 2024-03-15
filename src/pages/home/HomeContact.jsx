
const HomeContact = () => {

    const submitForm = (e) => {
        e.preventDefault()
    }


    return (
        <section className='contact' id='contact'>
            <div className="container">
                <div className="contact__inner">
                    <div className="contact__titles">
                        <h2 className="title">Хотите записаться на бесплатнуя консультацию!</h2>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam corporis esse.</p>
                    </div>
                    <form className='contact__form form' onSubmit={submitForm}>
                        <div className='form__label'>
                            <input
                                className='inp'
                                type="tel"
                                name="phone"
                                placeholder='Enter your phone number'
                                required
                            />
                            <button className="form__btn btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default HomeContact
