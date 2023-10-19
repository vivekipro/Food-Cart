import React from 'react';
import mealsimg from '../../Assests/meals.jpg';

function ImgContainer() {
  return (
    <div className="imgcontainer">
      <div className="img-overlay">
        <img src={mealsimg} alt="Delicious Meals" />
      </div>
    </div>
  );
}

export default ImgContainer;
