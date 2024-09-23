import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NFTs in all topics of life. Create your NFTs and sell them.
          </p>
          <Button btnName="Start your search" />
        </div>
        {/* Ensure you have a corresponding style for this section */}
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
            layout="responsive" // Consider using responsive layout for better scaling
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
