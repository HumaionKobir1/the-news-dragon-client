import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EiditorsInsights from './EiditorsInsights';
import useTitle from '../hooks/useTitle';

const News = () => {
    const news = useLoaderData()
    useTitle('News Details')
    const {_id, title, details, image_url, category_id} = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/category/${category_id}`}>
                            <Button variant='danger'><FaArrowLeft></FaArrowLeft> All news in this categories</Button>
                        </Link>
                    </Card.Body>
            </Card>
            <EiditorsInsights></EiditorsInsights>
        </div>
    );
};

export default News;