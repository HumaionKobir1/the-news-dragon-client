import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';
import useTitle from '../hooks/useTitle';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle('category')
    const {id} = useParams();
    return (
        <div>
            {id && <h3>Dragon News Home</h3>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;