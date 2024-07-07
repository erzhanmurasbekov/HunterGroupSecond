import React from "react";
import hunterlogo from "../assets/hunterlogo.png";
import { FaCalendarAlt, FaStore } from "react-icons/fa";
import MyFooter from "../components/MyFooter";
import transition from "../../transition";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 mt-24 xl:">
      <header className="py-8 text-center">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
      </header>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="text-neutralGrey mb-6">
          Компания ОсОО «Столичный Винно-Водочный завод» является частью
          компаний «Холдинг Сманов», расположенной по адресу Профсоюзная 114/2,
          Бишкек, Кыргызская Республика, далее – «СВВЗ». Мы благодарим Вас за
          посещение svvz.kg (далее - Сайт). Далее приведены наши положения о
          конфиденциальности, которые регулируют использование нами информации о
          Вас, которую мы собираем (далее – Информация).
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">Information Collection</h2>
        <p className="text-neutralGrey mb-6">
          СВВЗ собирает информацию о Вас при взаимодействии с Сайтом, включая,
          но не ограничиваясь:
        </p>
        <ul className="list-disc list-inside mb-6 text-neutralGrey">
          <li>Персональные данные, предоставленные Вами при регистрации</li>
          <li>Данные об использовании Сайта (куки, IP-адрес и т.д.)</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">Use of Information</h2>
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
        <h2 className="text-xl font-semibold mb-4">Sharing of Information</h2>
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
        <h2 className="text-xl font-semibold mb-4">Security</h2>
        <p className="text-neutralGrey mb-6">
          Мы предпринимаем разумные меры для защиты Вашей информации от
          несанкционированного доступа, использования или раскрытия.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-xl font-semibold mb-4">
          Changes to Privacy Policy
        </h2>
        <p className="text-neutralGrey mb-6">
          СВВЗ оставляет за собой право по своему усмотрению в любое время
          изменять, корректировать, добавлять или удалять части настоящих
          Положений о Конфиденциальности. Просим Вас периодически проверять
          наличие изменений, которые мы могли внести в Положения о
          Конфиденциальности. Продолжение использования Вами настоящего Сайта
          после внесения изменений в Правила и Условия Использования, будет
          означать Ваше согласие с такими изменениями.
        </p>
      </section>

      <footer className="py-8"></footer>
    </div>
  );
};

export default transition(PrivacyPolicy);
