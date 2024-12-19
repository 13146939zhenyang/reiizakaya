"use client";
import React, { useState, useEffect, useRef } from "react";
import { Logo, Name, Icon } from "@/public";
import { navbar } from "@/utils/constants";
import Image from 'next/image'

const Navbar = () => {
  const [selected, setSelected] = useState<string>("about-us");
  const headerRef = useRef<HTMLDivElement>(null);
  const handleClick = (value: string, path: string) => {
    setSelected(value);
    const element = document.getElementById(`${value}`);
    const offset = headerRef.current?.offsetHeight;
    if (value === "about-us") {
      window.scrollTo({
        top: element?.offsetTop! - offset! - 70 || 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: element?.offsetTop! - offset! + 10 || 0,
        behavior: "smooth",
      });
    }
  };
  const [scrolled, setScrolled] = useState<boolean>(false);
  // detect the scroll position, and change the selected navbar
  useEffect(() => {
    const handleScroll = () => {
      const aboutUs = document.getElementById("about-us");
      const menu = document.getElementById("menu");
      const news = document.getElementById("news");
      const gallery = document.getElementById("gallery");
      const contactBooking = document.getElementById("contact-booking");
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setSelected("about-us");
        setScrolled(false);
      }
      if (window.scrollY > menu?.offsetTop! - aboutUs?.offsetTop!) {
        setSelected("menu");
      }
      if (window.scrollY > news?.offsetTop! - aboutUs?.offsetTop!) {
        setSelected("news");
      }
      if (window.scrollY > gallery?.offsetTop! - aboutUs?.offsetTop!) {
        setSelected("gallery");
      }
      if (window.scrollY > contactBooking?.offsetTop! - aboutUs?.offsetTop!) {
        setSelected("contact-booking");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 ${
        // scrolled ? "xl:pt-0 pt-[24px]" : "xl:pt-[64px]"
        scrolled ? "pt-0" : "xl:pt-[64px]"
      } pt-[20px] w-screen z-50 ${
        scrolled
          ? "bg-[#173448] bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-[1px_2px_7px_black]"
          : "bg-[#173448]"
      }`}
      ref={headerRef}
    >
      <div
        className={`${
          scrolled ? "h-0 mb-2" : "h-auto mb-4"
        } xl:mx-40 mx-10 flex justify-center items-center transition-all ease-in-out duration-[300ms]`}
      >
        <div
          className={`${
            // scrolled ? "xl:w-0 w-[61px]" : "xl:w-[161px]"
            scrolled ? "w-0" : "xl:w-[161px]"
          } w-[60px] xl:mr-6 mr-1 xl:mt-1 transition-all ease-in-out duration-[300ms] relative aspect-square`}
        >
          <Image src={Logo.src} alt="reiizakaya-logo" fill loading="lazy" />
        </div>
        
        <div
          className={`${
            // scrolled ? "xl:w-0 w-[140px]" : "xl:w-[286px]"
            scrolled ? "w-0" : "xl:w-[286px]"
          } w-[100px] xl:mr-5 mr-1 transition-all ease-in-out duration-[300ms] drop-shadow-[0_0_10px] shadow-white relative aspect-[7/4]`}
        >
          <Image src={Icon.src} alt="reiizakaya-icon" fill />
        </div>

        <div
          className={`${
            // scrolled ? "xl:w-0 w-[100px]" : "xl:w-[224px]"
            scrolled ? "w-0" : "xl:w-[224px]"
          } w-[70px] xl:mt-5 mt-1 transition-all ease-in-out duration-[300ms] relative aspect-[3/1]`}
        >
          <Image src={Name.src} alt="reiizakay-name" fill loading="lazy" />
        </div>
      </div>
      <div className="xl:mx-40 mx-2 flex justify-between items-center lg:pb-5 pb-2">
        {navbar.map((item, index) => (
          <div key={index} onClick={() => handleClick(item.key, item.path)}>
            <p
              className={`${
                selected === item.key ? "text-[#B11F24]" : "text-[#F2F2F2]"
              } text-[12px] ${
                scrolled ? "xl:text-xl" : "xl:text-2xl"
              }  font-bold cursor-pointer hover:text-[#B11F24] transition-all duration-[300ms] ease-in-out`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
