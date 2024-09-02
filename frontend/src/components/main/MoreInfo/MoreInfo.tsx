"use client";
import { useTranslation } from "@/app/i18n/client";

export default function MoreInfo({ lang }: any) {
  const { t } = useTranslation(lang);
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex flex-col items-center py-12">
        <span className=" text-[#E61717] p-2 text-2xl">
          {t("service.more-info")}
        </span>
        <span className="text-2xl text-slate-800">035-258-341-4 ต่อ 23</span>
      </div>
    </div>
  );
}
