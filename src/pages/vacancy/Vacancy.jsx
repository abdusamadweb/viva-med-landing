import './Vacancy.scss'

const Vacancy = () => {

    const submitForm = (e) => {
        e.preventDefault()
    }


    return (
        <div className='vacancy'>
            <div className="container">
                <div className="vacancy__titles">
                    <h2 className="title">Vacancy</h2>
                    <p className="desc">Работать. Мы постоянно находимся в контакте с нашими партнерами всеми способами общения и успешно развиваем с ними сотрудничество. Мы всегда готовы ответить на ваши вопросы и отзывы.</p>
                </div>
                <form className='vacancy__form' onSubmit={submitForm}>
                    <div>
                        <label className='label'>
                            <input
                                className='inp'
                                type="text"
                                name="name"
                                placeholder='Имя и фамилия'
                                required
                            />
                        </label>
                        <label className='label'>
                            <input
                                className='inp'
                                type="tel"
                                name="phone"
                                placeholder='Телефон'
                                required
                            />
                        </label>
                        <label className='label'>
                            <input
                                className='inp hide'
                                type="file"
                                name="file"
                            />
                            <div className='inp file area d-flex align-center g1'>
                                <i className="fa-solid fa-paperclip"/>
                                <span className='txt'>Прикрепить файл</span>
                            </div>
                        </label>
                    </div>
                    <div>
                        <textarea
                            className='inp area'
                            // style={{height: '214px'}}
                            name="text"
                            placeholder='Ваше сообшение'
                        />
                        <div className='row align-center g1'>
                            <button className='btn'>Отправить</button>
                            <p className="desc">Сообщение должно быть не менее 10 символов.</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Vacancy
