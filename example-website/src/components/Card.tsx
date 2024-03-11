import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={imgSrc} alt={imgAlt} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;