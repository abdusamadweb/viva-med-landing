import {useState} from "react";

const HomeServices = () => {

    const [activeFilter, setActiveFilter] = useState(1)

    const filters = [
        {
            id: 1,
            title: 'Диагностика в Viva med'
        },
        {
            id: 2,
            title: 'Хирургия'
        },
        {
            id: 3,
            title: 'Лабаротория'
        },
        {
            id: 4,
            title: 'Прием'
        },
        {
            id: 5,
            title: 'Группа'
        },
    ]

    const benefits = [
        {
            id: 1,
            title: 'Диагностика в Viva med',
            desc: 'Используется только современное высокотехнологичное оборудование мировых производителей, позволяющее выявить заболевание на ранней стадии и своевременно приступить к лечению.',
            minPrice: 0,
            list: [
                'УЗД',
                'Вытяжная кровать',
                'Эфферентная терапия',
                'Массаж',
                'МРТ',
                'МСКТ',
                'Стационар',
                'Процедурный кабинет',
                'Физиотерапия',
                'Альтернативная медицина',
                'ЭЭГ- Электроэнцефалография',
            ]
        },
        {
            id: 2,
            title: 'Диагностика в Viva med',
            desc: 'Используется только современное высокотехнологичное оборудование мировых производителей, позволяющее выявить заболевание на ранней стадии и своевременно приступить к лечению.',
            minPrice: 0,
            list: [
                'УЗД'
            ]
        },
    ]


    return (
        <section className='services' id='services'>
            <div className="container">
                <h2 className="services__title def-title">Our Services</h2>
                <div className='services__wrapper'>
                    <ul className="filters">
                        {
                            filters.map(i => (
                                <li
                                    className={`filters__item ${activeFilter === i.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(i.id)}
                                    key={i.id}
                                >
                                    <div className='d-flex'>
                                        <span className='num'>{ i.id }.</span>
                                        <span className='title'>{ i.title }</span>
                                    </div>
                                    <ul className={`filters__benefits benefits ${activeFilter === i.id ? 'active' : ''}`}>
                                        {
                                            benefits
                                                .filter(i => i.id === activeFilter)
                                                .map(i => (
                                                    <li className='benefits__item' key={i.id}>
                                                        <span className='title'>{ i.title }</span>
                                                        <p className="desc">{ i.desc }</p>
                                                        <ul className='list'>
                                                            {
                                                                i.list.map((x, index) => (
                                                                    <li className='list__item' key={index}>{ x }</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </li>
                                                ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="benefits">
                        {
                            benefits
                                .filter(i => i.id === activeFilter)
                                .map(i => (
                                    <li className='benefits__item' key={i.id}>
                                        <span className='title'>{ i.title }</span>
                                        <p className="desc">{ i.desc }</p>
                                        <ul className='list'>
                                            {
                                                i.list.map((x, index) => (
                                                    <li className='list__item' key={index}>{ x }</li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HomeServices