import Link from "next/link";
import { FaPlus, FaFacebookF, FaYoutube, FaLine } from "react-icons/fa";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import menuItem from "./menuItem.json";
import Image from "next/image";

export default function SideBar({ sideBar, lang, contact }: any) {
  return (
    <div className="flex">
      <div
        className="sidebar-wraper w-full max-h-screen overflow-y-scroll"
        style={{ height: `calc(100vh - 68px)` }}
      >
        <ul className="sidebar-menu p-4">
          {menuItem.map((item: any, index: any) => (
            <li key={index} className="menu-item rounded-lg">
              <Link
                href={item[lang].href}
                title={item[lang].title}
                onClick={(e) => sideBar.toggleSubMenu(e)}
                className="p-2 hover:text-blue-700 flex items-center justify-between "
              >
                {item[lang].title}
                {item?.subMenu && (
                  <FaPlus className="plus-icon transition-all duration-200" />
                )}
              </Link>
              {item?.subMenu && (
                <ul className={`sub-menu`}>
                  {item?.subMenu.map((sub: any, i: any) => (
                    <li key={index + i}>
                      <Link
                        href={sub.href}
                        title={sub.title}
                        onClick={sideBar.closeSideBar}
                        className="submenu-item"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-start w-full pl-4">
          {/* @ts-ignore */}
          <LanguageSelect lng={lang} />
        </div>
      </div>

      <div className="fixed bottom-0 flex justify-between w-full max-w-90 p-4">
        <div>
          <div className="flex social-icon">
            {contact?.facebook && (
              <a href={contact?.facebook}>
                <Image
                  src="/img/fbLogo.png"
                  alt="soccial"
                  width={25}
                  height={25}
                />
              </a>
            )}
            {contact?.instagram && (
              <a href={contact?.instagram}>
                <Image
                  src="/img/igLogo.png"
                  alt="social"
                  width={25}
                  height={25}
                />
              </a>
            )}
            {contact?.line && (
              <a href={`https://line.me/ti/p/~${contact?.line}`}>
                <Image
                  src="/img/lineLogo.png"
                  alt="social"
                  width={25}
                  height={25}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
