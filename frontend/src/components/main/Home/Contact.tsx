import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className=" py-20 relative bg-[#FAFAFA]">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-10">
          <div className="col-span-6">
            <div className="flex flex-col gap-2 lg:gap-6">
              <h3 className="text-lg lg:text-3xl font-semibold text-slate-700">
                ขอแค่บอกมาเราจัดให้ถึงบ้าน
                ยุคนี้ไม่ต้องเสียค่าน้ำมันออกรถมาซื้ออีกแล้ว
              </h3>
              <p className="text-slate-700 text-sm lg:text-base">
                อะไหล่เครื่องใช้ไฟฟ้า (แอร์ ตู้เย็น ตู้แช่ เครื่องซักผ้า ฯลฯ)
                ออนไลน์ครบถ้วน สำหรับ ทุกความต้องการ ของแท้ทุกชิ้น
                จัดจำหน่ายโดยตัวแทนจำหน่ายอย่าง เป็นทางการ
              </p>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="lg:text-base text-sm">
                  ติดต่อเรา
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
