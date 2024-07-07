import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import transition from "../../transition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here, e.g., send data to backend
    setSent(true);
    // Clear form inputs if needed:
    // setFormData({
    //   name: "",
    //   email: "",
    //   number: "",
    //   subject: "",
    //   message: ""
    // });
  };

  return (
    <div
      className="xl:h-full xl:py-36 flex w-full mx-auto items-center"
      id="contactus">
      <div className="container mx-auto">
        <div className="flex justify-center md:mt-20 xl:mt-0 custom-height pb-20 flex-col xl:flex-row gap-x-8">
          {/* Left Section: Contact Form */}
          <div className="md:w-1/2 mx-auto">
            <div className="text-center flex pt-36 md:pt-8 flex-col lg:text-left mb-4 xl:mb-0">
              <h1 className="text-3xl text-gray-600 font-semibold mb-8 mx-auto">
                Напишите Нам
              </h1>
              <form
                method="post"
                className="flex-1 flex flex-col gap-4 md:gap-6 w-full mx-auto border-gray-600"
                onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-2 rounded-md outline-none px-4 py-2"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-2 rounded-md px-4 py-2"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border-2 rounded-md px-4 py-2"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border-2 rounded-md px-4 py-2"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  onChange={handleChange}
                  placeholder="Message"
                  className="border-2 rounded-md h-[200px] px-4 py-2"
                  name="message"
                  value={formData.message}></textarea>
                <button
                  disabled={sent}
                  type="submit"
                  className={`w-full md:w-[200px] font-semibold mx-auto h-11 ${
                    sent ? "bg-gray-700" : "bg-neutralDGrey"
                  } text-white rounded-lg border border-white/50 px-8 transition-all duration-300 flex justify-center items-center overflow-hidden group`}>
                  <span
                    className={`${
                      sent
                        ? ""
                        : "translate-x-3.5 group-hover:-translate-y-[80%] group-hover:opacity-0 transition-all duration-500"
                    }`}>
                    {sent ? "Отправлено" : "Отправить"}
                  </span>
                  {!sent && (
                    <BsArrowRight className="-translate-x-10 -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[22px]" />
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Section: Contact Information */}
          <div className="md:w-1/2 mx-auto flex justify-center items-center">
            <div className="text-lg text-center">
              <p className="mb-4">
                <strong>Телефон:</strong> +996 555 123456
              </p>
              <p className="mb-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@huntergroup.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  info@huntergroup.com
                </a>
              </p>
              <p>
                <strong>Адрес:</strong> г. Бишкек, ул. Ленина 123, офис 456
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(Contact);
