import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import hunterlogo from "../assets/hunterlogo.png";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <div className="text-white">
      <Footer container className="bg-gray-500 rounded-none text-center w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto py-2 xl:py-0">
            <div className="flex justify-center md:justify-start">
              <Footer.Brand
                src={hunterlogo}
                alt="Flowbite Logo"
                name="Hunter Group"
              />
            </div>

            <div className="flex justify-center">
              <Link to={"/policy"}>
                <h2 className="underline">Политика конфиденциальности</h2>
              </Link>
            </div>

            <div className="flex justify-center md:justify-end">
              <a
                href="mailto:erzhanmurasbekov@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl xl:text-2xl">
                huntergroup@gmail.com
              </a>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Hunter Group"
              year={2024}
              className="text-white"
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MyFooter;
