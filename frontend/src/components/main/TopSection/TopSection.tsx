"use client";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";

interface TopProps {
  lang: string;
}

export default function TopSecton({ lang }: TopProps) {
  const { t } = useTranslation(lang);

  return (
    <div className=" py-6 mb-6 border-b border-slate-200 grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-6 xl:col-span-4">
        <Image
          src="/img/air_top_section.png"
          width="1900"
          height="500"
          alt="factory"
          className="rounded-lg"
          priority={true}
        />
      </div>
      <div className="col-span-12 lg:col-span-6 xl:col-span-8 flex gap-4 flex-col items-start">
        <h2 className="bg-[#070B76] text-white p-2 inline rounded xl:text-2xl">
          AIR-CON PARTS ENGINEERING (THAILAND) CO., LTD.
        </h2>
        <span className="text-2xl">{t("cover.caption")}</span>
        <p>{t("cover.description")}</p>
      </div>
    </div>
  );
}
