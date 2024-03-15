import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'
import {doctors} from "../../assets/mock/doctorsList.js";
import {Link} from "react-router-dom";

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const HomeDoctors = () => {


    return (
        <section className='doctors' id='doctors'>
            <div className="container">
                <h2 className="doctors__title def-title">Meet our qualified Doctors</h2>
                <div className="doctors__content">
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="swiper no-copy"
                        grabCursor={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            860: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                            1150: {
                                slidesPerView: 4,
                                spaceBetween: 32,
                            },
                        }}
                    >
                        {
                            doctors.map(i => (
                                <SwiperSlide key={i.fullName}>
                                    <img className='img' src={i.img} alt="doctor"/>
                                    <div className="inner">
                                        <div className='wrapper'>
                                            <h3 className='name'>{ i.fullName }</h3>
                                            <span className="job txt">⚕️{ i.job }</span>
                                            <span className="for-who txt">{ i.forWho }</span>
                                            <h4 className="experience">Стаж работы: { i.experience } лет</h4>
                                            <span className='category txt'>{ i.category }</span>
                                        </div>
                                        <div className='center'>
                                            <Link className='link' to={`/doctors/${i.fullName}`}>View</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default HomeDoctors
