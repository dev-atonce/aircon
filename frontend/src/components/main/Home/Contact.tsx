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
          {/* <div className="col-span-6">
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
          </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative pt-6 pb-4 "> */}
          <div className="col-span-12 col-text" data-text="text">
            <div className="bg-slate-50 from-blue-100 rounded-xl mt-4 py-10 text-[#002B7F]">
              <div className="flex flex-col gap-4">
                <h2 className="text-center text-slate-700 text-2xl pb-4 font-semibold">
                  {t("page.company-profile")}
                </h2>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Name
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <p className="font-semibold">
                      AIR-CON PARTS ENGINEERING (THAILAND) CO., LTD.
                    </p>
                    <p className="">
                      Registration No. 0105536099603(Old 6872/2536) Date: August
                      31, 1993
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Address
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <ol className="">
                      <li>
                        Ayutthaya Factory : 142 Moo 16 Bangpa-In Industrial
                        Estate, Tambon Bangkrasan, Amphur Bangpa-in, Ayutthaya
                        13160, Thailand Tel. 0-3525-8341- 4 Fax 0-35258981
                      </li>
                      <li className="txt-remark">
                        Chonburi Factory : 48 Moo 2 Tambon Nongkayat, Amphur
                        Panatnikom, Chonburi 20140 Tel. 0-899014500,
                        0-89999014501
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Capital Baht (THB)
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    165,000,000 (Fully paid up), Start Operation 1993
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Annual Sale (THB)
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    1,255,000,000 (For 2021)
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Total Employees
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <ol className="">
                      <li>Ayutthaya : 332 (Update : Sep'2022)</li>
                      <li className="txt-remark">
                        Chonburi: 185 (Update : Sep'2022)
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Share Holders
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    Chiyoda Kuchou Kiki Co., Ltd. (CKK) 100% Japan
                  </div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Main Products
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    Stop Valve & Pressure vessels for air-conditioner
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md code-remark">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Main Customers
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <ol className="decimal">
                      <li>Daikin group (70%)</li>
                      <li className="txt-remark">Mitsubishi Electric (13%)</li>
                      <li>Mitsubishi Heavy (12%)</li>
                      <li>Toshiba (4%)</li>
                      <li>Fujitsu(1%)</li>
                    </ol>
                  </div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md code-remark">
                  <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300">
                    Granted Certificate
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <ol className="decimal">
                      <li>ISO 9001 : 2015</li>
                      <li className="txt-remark">ISO 14001 : 2015</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
