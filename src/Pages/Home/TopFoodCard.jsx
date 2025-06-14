import React from 'react';
import { Link } from 'react-router';
// import { Link } from 'react-router-dom';

const TopFoodCard = ({ food }) => {
    return (
        <div className="card bg-base-100 shadow-lg">
            <figure>
                <img src={food.foodImage} alt={food.foodName} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h3 className="text-xl font-semibold">{food.foodName}</h3>
                <p>Price: ${food.price}</p>
                <p>Category: {food.category}</p>
                <p>Purchase Count: {food.purchaseCount ?? 0}</p>
                <div className="card-actions justify-end">
                    <Link to={`/foodDetails/${food._id}`} className="btn btn-outline hover:bg-[#8D4974] hover:text-white">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopFoodCard;
