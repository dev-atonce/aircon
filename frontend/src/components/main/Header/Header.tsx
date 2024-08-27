"use client";
// import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { useEffect, useContext, useState } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Image from "next/image";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

export default function Header({ logo, contact, lang }: any) {
  const [currentLanguage, setCurrentLanguage] = useState<string>("th");
  const [openLang, setOpenLang] = useState<Boolean>(false);
  const [openID, setOpenID] = useState<String>("");

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { primaryColor }: any = useContext(PageSettingContext);
  const [openSubMenu, setOpenSubMenu] = useState<Boolean>(false);

  const languages = [
    { label: "Thai", value: "th" },
    { label: `English`, value: "en" },
    { label: `Japan`, value: "ja" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector("html")?.classList.toggle("nav-open");
  };
  const closeSideBar = () => {
    setIsOpen(false);
    document.querySelector("html")?.classList.remove("nav-open");
  };
  const toggleSubMenu = (e: any) => {
    const subMenu = e.currentTarget.parentElement?.querySelector(".sub-menu");
    if (subMenu) {
      e.preventDefault();
      setOpenSubMenu(!openSubMenu);
      setTimeout;
      e.currentTarget.closest(".menu-item").classList.toggle("active");
      const icon = e.currentTarget.parentElement?.querySelector(".plus-icon");
      icon?.classList.toggle("rotate-135");
      subMenu?.classList.toggle("open");
    } else {
      closeSideBar();
    }
  };

  const adjust = () => {
    if (window.innerWidth > 768) {
      closeSideBar();
    }
  };

  return (
    <div className="shadow-md ">
      <div className="flex">
        <div
          className={`fixed block lg:none top-0 left-0 h-full w-80 text-black bg-slate-200 transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="grid content-stretch">
            <SideBar sideBar={{ toggleSubMenu, closeSideBar }} />
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Logo img={logo} />
          </div>
          <div className="flex flex-col py-4">
            <div className=" ">
              <div className="flex justify-end">
                <div className="flex justify-center items-center lg:hidden">
                  <div
                    className="cursor-pointer flex flex-col items-center justify-around w-8 h-8 burger"
                    onClick={toggleSidebar}
                  >
                    <div
                      className={`w-full h-1 ${isOpen ? `bg-white` : `bg-black`} ${isOpen ? "transform rotate" : ""} transition-transform duration-300`}
                    ></div>
                    <div
                      className={`w-full h-1 ${isOpen ? `bg-white` : `bg-black`} ${isOpen ? "opacity-0" : ""} transition-opacity duration-300`}
                    ></div>
                    <div
                      className={`w-full h-1 ${isOpen ? `bg-white` : `bg-black`} ${isOpen ? "transform -rotate" : ""} transition-transform duration-300`}
                    ></div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-end  pb-4 gap-4">
                  <a href={contact?.facebook}>
                    <Image
                      src="/img/fbLogo.png"
                      alt="soccial"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a href={contact?.instagram}>
                    <Image
                      src="/img/igLogo.png"
                      alt="social"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a href={contact?.line}>
                    <Image
                      src="/img/lineLogo.png"
                      alt="social"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="">
                <div className="responsive-nav">
                  <div className="flex justify-end">
                    <NavBar lang={lang} />
                  </div>
                  <div className="more-menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
