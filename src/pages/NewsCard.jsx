import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark,  FaRegStar,  FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const NewsCard = ({news}) => {
    const {_id, title, details,image_url, author, rating, total_view} = news;

    return (
        <div>
            <Card className=" mb-3">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{height: '40px'}} src={author.img} roundedCircle/>
                    <div className='ms-2 flex-grow-1'>
                        <p style={{marginBottom: '0px'}}>{author?.name}</p>
                        <p style={{marginBottom: '0px'}}><small>{moment(author?.published_date).format("MMM Do YYYY")}</small></p>
                    </div>
                    <div className='d-flex gap-2'>
                        <FaRegBookmark></FaRegBookmark> 
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Text>
                            {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                        </Card.Text>
                    </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                             placeholderRating={rating.number}
                             readonly
                             emptySymbol={<FaRegStar></FaRegStar>}
                             placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                             fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                    <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;