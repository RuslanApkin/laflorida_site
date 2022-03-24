import React from "react";
import SocLinks from "./SocLinks";
import mir from "../img/mir-logo.svg";
import visa from "../img/visa-logo.svg";
import mc from "../img/mastercard-logo.png";
import jbc from "../img/jcb-logo.svg";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="max-w-7xl mx-auto p-8 sm:p-16 lg:p-20">
        <div className="flex flex-row flex-wrap justify-between gap-4">
          <div className="mb-4 ">
            <button className="h-9 px-6 font-semibold rounded-full bg-accent text-white hover:bg-accent/75">
              Оптовикам
            </button>
            <div className="ml-4 mt-4 flex flex-col gap-2 justify-center">
              <a className="text-slate-800 hover:text-accent" href="#">
                Услуги
              </a>
              <a className="text-slate-800 hover:text-accent" href="#">
                Оплата и доставка
              </a>
              <a className="text-slate-800 hover:text-accent" href="#">
                Контакты
              </a>
            </div>
          </div>
          <div className="">
            <div>
              <h5 className="uppercase">Мы в социальных сетях</h5>
              <SocLinks />
              <h5 className="uppercase pt-2">Способы оплаты</h5>
              <ul className="flex gap-3 my-3">
                <li>
                  <img
                    src={mir}
                    alt=""
                    className="h-8 py-0.5 object-contain object-center"
                  />
                </li>
                <li>
                  <img
                    src={visa}
                    alt=""
                    className="h-8 py-0.5 object-contain object-center"
                  />
                </li>
                <li>
                  <img
                    src={mc}
                    alt=""
                    className="h-8 object-contain object-center"
                  />
                </li>
                <li>
                  <img
                    src={jbc}
                    alt=""
                    className="h-8 object-contain object-center"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className=""></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
