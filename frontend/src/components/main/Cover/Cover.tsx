"use client";
import Image from "next/image";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";

export default function Cover({ pageName, prevPage, lang }: any) {
  // const { t } = useTranslation(lang);
  return (
    <div className="w-full pb-4 lg:pb-0 ">
      <div className="relative ">
        <Image
          className="w-full  shadow-sm "
          src="/img/aircon_cover.png"
          width={2000}
          height={500}
          quality={80}
          alt="cover"
          priority={true}
        />
        <div className="absolute top-4 xl:top-14 left-[50%] translate-x-[-50%] flex flex-col items-center text-white">
          <h2 className=" text-xl lg:text-4xl font-semibold ">{pageName}</h2>
          <p className="text-xl hidden lg:block">
            AIR-CON PARTS ENGINEERING (THAILAND) CO., LTD.
          </p>
          <p className=" hidden lg:block">
            ผลิตและจำหน่ายชิ้นส่วนอะไหล่แอร์และเครื่องทำความเย็น
          </p>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="py-4 hidden md:block">
          <Breadcrumb pageName={pageName} prevPage={prevPage} />
        </div>
      </div>
    </div>
  );
}
