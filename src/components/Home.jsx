import React from "react";
import hunterLogo from "../assets/hunterlogo.png";
import whiteLogo from "../assets/logoWhite.jpg";
import mountains from "../assets/mountains.jpg";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import transition from "../../transition";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        {/* Mountains image with fixed background */}
        <img
          src={mountains}
          alt="Mountains"
          className="fixed inset-0 w-full h-full object-cover object-center z-0"
          style={{
            transform: "translate3d(-16.1px, 3.8px, 0px)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            zIndex: "-1",
          }}
        />
        {/* Content over the background */}
        <div className="relative flex items-center justify-center h-full z-10">
          <img className="w-40 md:w-56" src={hunterLogo} alt="Hunter Logo" />
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-16 md:py-72 px-8 md:px-28 flex flex-col justify-center bg-white">
          <h1 className="text-3xl font-bold mb-4">О компании</h1>
          <p className="text-lg">
            Компания Hunter Group является одним из крупнейших производителей
            алкогольных напитков в Кыргызстане. Она занимает ведущие позиции на
            рынке благодаря высокому качеству своей продукции и долголетнему
            опыту. Заводы Hunter Group оснащены современным оборудованием для
            производства напитков, что обеспечивает стабильное качество
            продукции.
          </p>
        </div>
        <div
          className="w-full  md:w-1/2 bg-cover bg-center h-64 md:h-auto"
          style={{ backgroundImage: `url(${whiteLogo})` }}></div>
      </section>

      {/* Fixed background image section with moving clouds */}
      <section
        className="relative w-full z-0 h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${mountains})`,
          backgroundPosition: "center",
        }}>
        {/* Cloud animations */}
        <img src={cloud1} alt="Cloud" className="cloud cloud1" />
        <img src={cloud2} alt="Cloud" className="cloud cloud2" />
        <img src={cloud1} alt="Cloud" className="cloud cloud3" />
        <img src={cloud2} alt="Cloud" className="cloud cloud4" />
        <img src={cloud1} alt="Cloud" className="cloud cloud1-duplicate" />
        <img src={cloud2} alt="Cloud" className="cloud cloud2-duplicate" />
        <img src={cloud1} alt="Cloud" className="cloud cloud3-duplicate" />
        <img src={cloud2} alt="Cloud" className="cloud cloud4-duplicate" />
      </section>

      {/* Product Quality Section */}
      <section className="w-full p-4 bg-white">
        <div className="text-center py-12 md:py-28 px-4 md:px-20 w-full md:w-3/5 mx-auto">
          <h1 className="text-3xl font-bold mb-4">Секрет вкуса</h1>
          <p className="text-lg">
            Продукция обладает изысканным вкусом, который достигается благодаря
            ряду сложных процедур. Вода, используемая для нашей водки, поступает
            с вершин самых высоких гор Тянь-Шаня и добывается из скважин
            глубиной 150 метров. Четырехкратная дистилляция обеспечивает
            наилучшую очистку, что подтверждается многолетними исследованиями.
          </p>
        </div>
      </section>
    </div>
  );
};

export default transition(Home);
