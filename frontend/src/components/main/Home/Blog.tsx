"use client";
import Link from "next/link";
import BlogSection from "../BlogSection/BlogSection";
import { useTranslation } from "next-i18next";

interface BlogProps {
  lang: string;
}

export default function Blog({ lang }: BlogProps) {
  const { t } = useTranslation(lang);

  return (
    <div className="border-slate-200 py-12 ">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-800 text-2xl font-semibold">
          {" "}
          {t("page.blog")}
        </h2>
      </div>
      <div className="py-6">
        <BlogSection
          blogPage={false}
          home={true}
          limit={6}
          typeBlog={["general", "customer", "selfedit"]}
          lang={lang}
        />
      </div>
      <div className="flex justify-center">
        <Link
          href={`/${lang.toLowerCase()}/news-activity`}
          className=" text-white rounded-full px-4 py-2 flex items-center bg-[#070B76]"
        >
          {t("button.see-all")}
        </Link>
      </div>
    </div>
  );
}
