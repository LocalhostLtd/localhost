import React from "react";
import Card from "./Card";

import Image from "../../public/sesa.png";

const CardContainer = () => {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">
      <Card
        title="SESA Website"
        description="Remade the SESA (Software Engineering Students Association) website in a newer framework."
        imgSrc={Image.src}
        imgAlt="SESA Project"
        linkUrl="https://sesa.org.nz/"
      />
    </div>
  );
};

export default CardContainer;
