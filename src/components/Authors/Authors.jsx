import React, { useRef, useState, useEffect } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AuthorCard from './AuthorCard';
// import './styles.css';

const Authors = () => {
    
    const [authors, setAuthors] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(authors.length);
    const prependNumber = useRef(1);

    // Fetch authors data
    useEffect(() => {
        fetch('/authors.json')
            .then(res => res.json())
            .then(data => setAuthors(data));
    }, []);
    const [slides, setSlides] = useState(
        Array.from({ length: authors.length }).map((_, index) => `Slide ${index + 1}`)
    );
    const prepend = () => {
        setSlides([
            `Slide ${prependNumber.current - 2}`,
            `Slide ${prependNumber.current - 1}`,
            ...slides,
          ]);
          prependNumber.current = prependNumber.current - 2;
          swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        if (swiperRef) swiperRef.slideTo(index - 1, 0);
    };

    return (
        <div className='bg-[#0079B4] text-white'>
            <p className='text-center text-3xl font-semibold py-3'>Popular Auhtor</p>

            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                virtual
                className='grid grid-cols-3'
            >
                {authors.map((author, index) => (
                    <SwiperSlide key={index}>
                        <AuthorCard author={author} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Authors;