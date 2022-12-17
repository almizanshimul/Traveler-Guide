import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, picture, price, about } = props.service;
    const navigate = useNavigate();

    const navigateCheckout = () => {
        navigate(`/checkout/${name}`)
    }
    return (
        <Card className='mb-3'>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{about}</Card.Text>
                <Card.Text className='price'>{price}</Card.Text>
                <Button variant="primary" onClick={() => { navigateCheckout(name) }}>Book Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;