import React from 'react';
import Card from './Card';

import Image from './test_image.jpeg';

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <Card
        title="Project 1"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={Image.src}
        imgAlt="Project 1"
      />
      <Card
        title="Project 2"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={Image.src}
        imgAlt="Project 2"
      />
      <Card
        title="Project 3"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={Image.src}
        imgAlt="Project 3"
      />
    </div>
  );
};

export default CardContainer;