"use client";
import ProductCard from "../ProductCard/ProductCard";
import { useTranslation } from "next-i18next";
export default function ServiceSection({ lang, services, page }: any) {
  const { t } = useTranslation(lang);
  return (
    <div className="">
      {page && (
        <h2 className="text-2xl font-semibold text-slate-800 text-start mb-4">
          {t("page.service")}
        </h2>
      )}

      <div className="grid grid-cols-12 gap-4">
        {services?.map((i: any, k: any) => (
          <ProductCard item={i} key={k} lang={lang} />
        ))}
      </div>
    </div>
  );
}
