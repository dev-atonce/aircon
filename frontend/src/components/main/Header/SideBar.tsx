import Link from "next/link";
import { FaPlus, FaFacebookF, FaYoutube, FaLine } from "react-icons/fa";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import menuItem from "./menuItem.json";

export default function SideBar({ sideBar, lang }: any) {
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
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="rounded-full p-2 bg-blue-600"
            >
              <FaFacebookF fontSize="1.2em" color="white" />
            </a>
            <a
              href="https://line.me/th"
              target="_blank"
              className="rounded-full p-2 bg-green-500 ml-1"
            >
              <FaLine fontSize="1.2em" color="white" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="rounded-full p-2 bg-red ml-1"
            >
              <FaYoutube
                fontSize="1.2em"
                color="white"
                className="bg-red-500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
