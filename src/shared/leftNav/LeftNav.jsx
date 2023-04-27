import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../src/style/style.css'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error));
    }, [])
    return (
        <div className=''>
            <h3>All Categories</h3>
            <h4 className='bg text-center py-3 rounded mt-3'>National News</h4>
            <div className='ms-5 d-grid gap-3 mt-3 ps-4'>
                {
                    categories.map(category => <h5
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                    </h5>)
                }
            </div>
        </div>
    );
};

export default LeftNav;