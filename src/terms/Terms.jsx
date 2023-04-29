import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam assumenda, iusto provident minus quas, velit, officia ex voluptates perspiciatis inventore dicta pariatur aliquam veritatis quam. Ipsum repellendus quas tenetur sit omnis consequatur magnam, beatae reprehenderit libero. Earum impedit rerum alias, nesciunt, at quasi unde laboriosam quaerat quo reprehenderit, magni veritatis?</p>
            <br />
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;