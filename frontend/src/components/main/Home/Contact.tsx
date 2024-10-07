"use client";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useTranslation } from "next-i18next";

export default function Contact({ lang }: any) {
  const { t } = useTranslation(lang);

  return (
    <div className=" py-20 relative bg-[#FAFAFA]">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-10">
          <div className="col-span-6">
            <div className="flex flex-col gap-2 lg:gap-6">
              <h3 className="text-lg lg:text-3xl font-semibold text-slate-700">
                {t("page.contact-section.title")}
              </h3>
              <p className="text-slate-700 text-sm lg:text-base">
                {t("page.contact-section.description")}
              </p>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="lg:text-base text-sm">
                  {t("contact.title")}
                </label>
                <div className="flex gap-2 lg:gap-4">
                  <a
                    href="tel:065-056-4598"
                    className=" px-4 py-2 rounded-full text-white bg-[#070B76] lg:text-base text-sm flex items-center gap-2"
                  >
                    <BsFillTelephoneFill />
                    <span>035-258-341-4</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 hidden lg:block">
            <Image
              src="/img/air_home_contact.png"
              width={1000}
              height={1000}
              alt="contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
