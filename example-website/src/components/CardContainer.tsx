import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Card
        title="Card Title 1"
        description="This is the description for Card 1."
        imgSrc="/path/to/image1.jpg"
        imgAlt="Card 1 Image"
      />
      <Card
        title="Card Title 2"
        description="This is the description for Card 2."
        imgSrc="/path/to/image2.jpg"
        imgAlt="Card 2 Image"
      />
      <Card
        title="Card Title 3"
        description="This is the description for Card 3."
        imgSrc="/path/to/image3.jpg"
        imgAlt="Card 3 Image"
      />
    </div>
  );
};

export default CardContainer;