import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className=''>
                    <img
                        className="d-block w-100 vh-100"
                        src="https://i.ibb.co/4J7bf3t/bali.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Bali, Indonesia</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className=''>
                    <img
                        className="d-block w-100 vh-100"
                        src="https://i.ibb.co/Jx8RhgN/New-Orleans.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>New Orleans, Mexico</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=''>
                    <img
                        className="d-block w-100 vh-100"
                        src="https://i.ibb.co/Wp4jvF1/Kerry-Ireland.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Kerry, Ireland</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;