import React from "react";

const Modal = ({ showModal, handleYes, handleNo }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] ">
        <h2 className="text-2xl font-bold mb-4 text-center">
          ВЫ ДОСТИГЛИ ВОЗРАСТА ПОТРЕБЛЕНИЯ АЛКОГОЛЬНЫХ НАПИТКОВ В ВАШЕЙ СТРАНЕ?
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleNo}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
            Нет
          </button>
          <button
            onClick={handleYes}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            Да
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
