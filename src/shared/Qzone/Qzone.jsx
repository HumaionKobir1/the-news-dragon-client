import React from 'react';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const Qzone = () => {
    return (
        <>
            <div className='bg-secondary p-2 mt-3 rounded'>
                <h3 className='text-white'>Q-Zone</h3>
                <div className='text-center p-3 '>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
        </>
    );
};

export default Qzone;