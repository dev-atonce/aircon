"use client";
import Image from "next/image";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useTranslation } from "@/app/i18n/client";

interface CoverProps {
  pageName: string;
  prevPage: { pageName: string; url: string };
  lang: string;
}

export default function Cover({ pageName, prevPage, lang }: CoverProps) {
  const { t } = useTranslation(lang);
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
          <h1 className=" text-xl lg:text-4xl font-semibold ">
            {t(`${pageName}`)}
          </h1>
          <p className="text-xl hidden lg:block">{t("cover.title")}</p>
          <p className=" hidden lg:block">{t("cover.caption")}</p>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="py-4 hidden md:block">
          <Breadcrumb
            pageName={t(`${pageName}`)}
            prevPage={prevPage}
            lang={lang}
          />
        </div>
      </div>
    </div>
  );
}
