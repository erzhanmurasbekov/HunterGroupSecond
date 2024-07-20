import React from "react";
import hunterlogo from "../assets/hunterlogo.png";
import MyFooter from "../components/MyFooter";
import transition from "../../transition";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 mt-24 xl:">
      <header className="py-8 text-center">
        <h1 className="text-2xl font-bold">Политика конфиденциальности</h1>
      </header>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">Введение</h2>
        <p className="text-neutralGrey mb-6">
          Компания Hunter Group (далее "Компания") придает большое значение
          защите персональных данных и соблюдению законодательства в области
          конфиденциальности. Настоящая Политика конфиденциальности (далее
          "Политика") описывает, какие данные мы собираем, как мы их используем
          и защищаем.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">
          Сбор и использование данных
        </h2>
        <p className="text-neutralGrey mb-6">
          Мы можем собирать следующую личную информацию:
        </p>
        <ul className="list-disc list-inside mb-6 text-neutralGrey">
          <li>
            Имя, фамилия Контактная информация, включая адрес электронной почты
            и номер телефона
          </li>
          <li>Данные об использовании Сайта (куки, IP-адрес и т.д.)</li>
          <li>Информация о покупках и предпочтениях</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">Использование данных</h2>
        <p className="text-neutralGrey mb-6">
          Информация, которую мы собираем, используется для следующих целей:
        </p>
        <ul className="list-disc list-inside mb-6 text-neutralGrey">
          <li>Предоставление услуг и информации, которые запрашиваете Вы</li>
          <li>Улучшение качества нашего Сайта и услуг</li>
          <li>Анализ и исследование рыночных тенденций</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">
          Передача данных третьим лицам
        </h2>
        <p className="text-neutralGrey mb-6">
          Мы можем делиться Вашей информацией с третьими лицами в следующих
          случаях:
        </p>
        <ul className="list-disc list-inside mb-6 text-neutralGrey">
          <li>С Вашего согласия</li>
          <li>Для соблюдения юридических обязательств</li>
          <li>Для защиты наших прав и собственности</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">Безопасность данных</h2>
        <p className="text-neutralGrey mb-6">
          Мы предпринимаем разумные меры для защиты Вашей информации от
          несанкционированного доступа, использования или раскрытия.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">Изменения в Политике</h2>
        <p className="text-neutralGrey mb-6">
          Компания оставляет за собой право вносить изменения в настоящую
          Политику. Все изменения будут опубликованы на этой странице и вступают
          в силу с момента публикации.
        </p>
      </section>
    </div>
  );
};

export default transition(PrivacyPolicy);
