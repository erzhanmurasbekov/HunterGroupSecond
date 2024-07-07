import React from "react";
import { FaWineBottle } from "react-icons/fa";
import transition from "../../transition";
import catalog1 from "../assets/catalog1.jpg";
import catalog from "../assets/catalog.pdf";

const Products = () => {
  return (
    <main
      className="min-h-screen flex flex-col justify-center items-center"
      id="product">
      <div className="max-w-screen-2xl mt-28 md:mt-0 mx-auto my-8 px-4 lg:px-14 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="mx-auto mb-8 md:mb-0 md:w-2/5 relative">
          {/* Lazy load image */}
          <img
            src={catalog1}
            alt=""
            loading="lazy"
            className="blur w-56 md:w-full md:max-h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex md:hidden justify-center">
          {/* Download catalog link */}
          <a
            href={catalog}
            download="catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandPrimary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-brandPrimaryDark transition-colors duration-300 text-lg md:text-xl">
            СКАЧАТЬ КАТАЛОГ
          </a>
        </div>
        <div className="md:w-3/5 mx-auto text-center relative z-0">
          {/* Product information */}
          <h2 className="text-4xl text-neutralDGrey z-0 font-semibold mb-6 mx-auto md:mb-10 md:text-5xl md:w-4/5 text-center">
            ЧРЕЗМЕРНОЕ УПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ!
          </h2>
          <p className="text-lg mb-6 md:text-xl md:mb-8">
            Согласно Закону «О рекламе», в Кыргызской Республике запрещена
            реклама алкогольных напитков. В связи с этим, если вы хотите
            ознакомиться с нашей продукцией, вы можете загрузить наш каталог к
            себе и ознакомиться с ней.
          </p>
          <div className="hidden md:flex justify-center">
            {/* Download catalog link */}
            <a
              href={catalog}
              download="catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brandPrimary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-brandPrimaryDark transition-colors duration-300 text-lg md:text-xl">
              СКАЧАТЬ КАТАЛОГ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default transition(Products);
