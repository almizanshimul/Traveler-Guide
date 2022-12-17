import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Checkout from '../Checkout/Checkout';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <h2 className='text-center mt-5'>Holiday Tour</h2>
            <Row className='justify-content-between my-5'>
                {
                    services.map(
                        service =>
                            <Service
                                key={service.id}
                                service={service}
                            >
                            </Service>
                            )
                }
                
                
            </Row>
        </Container>
    );
};

export default Services;