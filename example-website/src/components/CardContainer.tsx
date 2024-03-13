import React from 'react';
import Card from './Card';

import Image from './test_image.jpeg';
import XIVImage from '../../public/XIV.png'

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 l:grid-cols-4 gap-10">
      <Card
        title="XIV"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={XIVImage.src}
        imgAlt="Project 1"
        linkUrl='https://tonylxm.github.io/sesa-x-wdcc-hackathon/'
      />
      <Card
        title="Project 2"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={Image.src}
        imgAlt="Project 2"
        linkUrl='https://www.google.com/'
      />
      <Card
        title="Project 3"
        description="Project description, what we did, how we did it. Who the client was etc."
        imgSrc={Image.src}
        imgAlt="Project 3"
        linkUrl='https://www.google.com/'
      />
    </div>
  );
};

export default CardContainer;