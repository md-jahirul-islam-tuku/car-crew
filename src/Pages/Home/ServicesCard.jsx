import React, { useContext } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/userContext';

const ServicesCard = ({ service }) => {
  const {user} = useContext(AuthContext)
  const { title, img, price, _id } = service;
  return (
    <div className="card w-full bg-gray-100 shadow-xl">
      <figure className="px-3 pt-3">
        <img src={img} alt="service" className="rounded-lg h-[28vh]                                                 " />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className='flex justify-between items-center text-error'>
          <div className='font-bold text-lg'>Price: ${price}</div>
          <Link to={`/checkout/${_id}`} ><button className='hover:bg-gray-300 p-2 rounded-full'><FaLongArrowAltRight /></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;