import React from 'react';
import Link from 'next/link';
import { Content } from 'next/font/google';

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, imgAlt, linkUrl}) => {
  return (
    <Link href={linkUrl} target="_blank" rel="noopener noreferrer" passHref>

        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                <img src={imgSrc} alt={imgAlt} className="w-full" />
            </figure>
            <div className="card-body opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="card-title">{title}</h2> 
                <p>{description}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    </Link>
  );
};

export default Card;