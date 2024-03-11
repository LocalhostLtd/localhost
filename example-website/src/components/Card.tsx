import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={imgSrc} alt={imgAlt} className="w-full" />
      </figure>
      <div className="card-body opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Check It Out!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;