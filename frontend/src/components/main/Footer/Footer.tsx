"use client";
import { useContext } from "react";
import { Logo } from "../Logo/Logo";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";

import { FaPhone } from "react-icons/fa6";

import Image from "next/image";

import { MdEmail, MdOutlineMailOutline } from "react-icons/md";

import menuItem from "@/components/main/Header/menuItem.json";

export default function Footer({ logo, contact, lang }: any) {
  const { primaryColor }: any = useContext(PageSettingContext);

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <div className="text-white bg-[#070B76] ">
      <div className="">
        <div className="container mx-auto pt-4   ">
          <div className=" border-b border-white pb-2 flex items-center justify-between">
            <div>
              <Logo img={logo} />
            </div>
            <div className="hidden lg:flex">
              {menuItem.map((item: any, key: number) => {
                return (
                  <Link
                    key={key}
                    href={`/${lang}/${item[lang].href}`}
                    className={`menu-item px-4 py-3 nav-button hover:text-white hover:bg-[#4258a0]`}
                  >
                    {item[lang].title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-4">
        <div className="flex justify-start  flex-col lg:flex-row lg:justify-between lg:gap-20  ">
          <div className="flex flex-col justify-center items-center lg:items-start lg:basis-1/2  ">
            <div className="flex-col flex items-center lg:items-start gap-3 pb-6  ">
              <p className="">{contact?.addressTH}</p>
              <p className="text-sm">
                บริษัทฯ
                ได้รับการส่งเสริมการลงทุนในการผลิตชิ้นส่วนอะไหล่แอร์และเครื่องทำความเย็น
                สำหรับการส่งออกและขายในประเทศรวมถึงการได้รับการรับรองทางด้านคุณภาพ
                ISO 9001 และ ISO14001 ทุนจดทะเบียนโดยชาวญี่ปุ่น
              </p>
            </div>
          </div>

          <div className="flex lg:basis-1/2 sm:flex-row flex-col items-start ">
            <div className="xl:basis-3/4 w-full sm:basis-3/5 hidden sm:block">
              <div className="flex flex-col gap-2 mb-3">
                <label className="flex items-center gap-1">
                  <div className="w-2 bg-slate-300 h-4"></div>Contact
                </label>
                <div>
                  <a href="" className="flex items-center gap-2">
                    <FaPhone />
                    <span>{contact?.telephone}</span>
                  </a>
                  <a
                    href={`mailto:${contact?.email}`}
                    className="flex items-center gap-2"
                  >
                    <MdEmail size={20} />
                    <span>{contact?.email}</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-1">
                  <div className="w-2 bg-slate-300 h-4"></div>Social
                </label>
                <div className="flex items-center gap-6">
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
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto py-4  flex items-center justify-center  text-xs">
          <div>
            <span className="">
              ©Copyright {currentYear} Air-Con Parts Engineering Thailand
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
