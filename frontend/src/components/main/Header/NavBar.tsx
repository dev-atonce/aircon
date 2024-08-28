import Link from "next/link";
import NavDropDown from "./NavDropdown";
import menuItem from "./menuItem.json";

export default function NavBar({ lang }: { lang: string }) {
  return (
    <>
      <div className="nav-menu" id="scrollable-content">
        {menuItem.map((item: any, key: number) => {
          if (item[lang].subMenu)
            return (
              <NavDropDown
                key={key}
                title={item[lang].title}
                dropdownItems={item[lang].subMenu}
                sectionKey={key}
              />
            );
          else
            return (
              <Link
                key={key}
                href={`/${lang}/${item[lang].href}`}
                className={`menu-item px-4 py-3 nav-button hover:text-white hover:bg-[#070B76]`}
              >
                {item[lang].title}
              </Link>
            );
        })}
      </div>
    </>
  );
}
