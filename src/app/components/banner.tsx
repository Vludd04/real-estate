import React from "react";
import image from "../../assets/house-banner.png";
import Search from "./search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="font-['Merriweather'] text-[64px] mb-8 leading-[133%]">
            <span className="text-[#254BB2]">Find</span> your next dream home
          </h1>
          <p className="font-['Open_Sans'] max-w-[530px] mb-8 text-[21px] font-normal">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in US and Canada more than 15
            years.
          </p>
        </div>
        {/* Image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={image} alt="image" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
