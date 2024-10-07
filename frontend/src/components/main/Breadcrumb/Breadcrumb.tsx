"use client";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import { MdKeyboardArrowRight } from "react-icons/md";

interface BreadcrumbProps {
  pageName: string;
  prevPage: { pageName: string | null; url: string | null };
  lang: string;
}
const Breadcrumb = ({ pageName, prevPage, lang }: BreadcrumbProps) => {
  const { t } = useTranslation(lang);
  return (
    <>
      <div className=" hidden md:flex text-slate-400 ">
        <nav>
          <ol className="flex items-center gap-2">
            {prevPage?.pageName && prevPage?.url ? (
              <li>
                <Link
                  className="text-sm flex items-center "
                  href={`/${lang}/${prevPage?.url}`}
                >
                  <span>{t(`${prevPage?.pageName}`)}</span>
                  <MdKeyboardArrowRight size={20} />
                </Link>
              </li>
            ) : (
              <li>
                <span className="text-sm ">{t(`${prevPage?.pageName}`)}</span>
              </li>
            )}
            <li className="text-sm ">{pageName}</li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;
