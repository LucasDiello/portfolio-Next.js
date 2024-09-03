import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { t, i18n : {language} } = useTranslation();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return alert("Preencha todos os campos!");

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_lzlsbka",
        "template_ocpy3y8",
        templateParams,
        "c7xOWKtXvM4FEGhYa"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email enviado com sucesso!");
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar email!");
        }
      );
  };
  return (
    <section
      className="lg:h-[50vh] relative bg-black flex justify-center items-center
    text-gray-200 font-sans font-thin"
      id="contact"
    >
      <div className="Toastify"></div>
      <div className="contact-me-image  lg:h-[50vh] h-full"></div>
      <div className="h-full p-10 lg:p-0 flex flex-wrap justify-center items-center">
        <div className="lg:mr-10">
          <h1 className="text-xl">
            {t("get-in-touch")} <span className="text-[#93b0c6] font-bold">{t("title-contact2")}</span>
          </h1>
          <p className="text-xs">
            {t("text-contact2")}
          </p>
          <form
            className="flex flex-col mt-2 relative  space-y-6"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="h-10 bg-inherit border-none border-contact text-slate-200"
              placeholder={`${language === "en" ? "Name" : "Nome"}`}
              value={name}
              autoComplete="on"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="h-10 bg-inherit border-none border-contact text-slate-200"
              placeholder="Email"
              value={email}
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder={`${language === "en" ? "Message" : "Mensagem"}`}
              className="h-14 border-none border-contact !text-black resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="h-10 rounded-md bg-[#93b0c6] border-none hover:bg-[#6392b3]"
              aria-label="Enviar email de contato"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="lg:ml-10 lg:block hidden space-y-5">
        <h1 className="text-xl">{t("title-testimonials")}</h1>
        <div>
          <h2 className="text-xl">
            {t("get-in-touch")} <span className="text-[#93b0c6] font-bold">{t("title-contact2")}</span>
          </h2>
          <p className="text-xs ">
              {t("text-testimonials")}
          </p>
        </div>
        <div className="flex items-center text-xs ">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="mr-5"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z"></path>
              <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></path>
            </svg>
          </div>
          <div>
            <p>{t("localization")}</p>
            <p>RS - Canoas - Mathias Velho</p>
          </div>
        </div>
        <div className="flex items-center text-xs">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="mr-5"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
            </svg>
          </div>
          <div>
            <p>{t("telephone")}</p>
            <p>(51) 9 9251-4676</p>
          </div>
        </div>
        <div className="flex items-center text-xs">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 1024 1024"
              className="mr-5"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
            </svg>
          </div>
          <div>
            <p>Email</p>
            <p>lucasoliveiradiello@hotmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
