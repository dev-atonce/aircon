"use client";
import ServiceSection from "../ServiceSection/ServiceSection";
import { useTranslation } from "next-i18next";
interface ServiceProp {
  lang: string;
  services: any;
}

export default function Service({ lang, services }: ServiceProp) {
  const { t } = useTranslation(lang);
  return (
    <div className="pt-6 sm:pb-14 relative project">
      <h2 className="text-2xl font-semibold text-slate-800 text-center mb-4">
        {t("page.service")}
      </h2>
      <ServiceSection lang={lang} services={services} />
    </div>
  );
}
