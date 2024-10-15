import type { Viewport } from "next";
import { ConfigProvider } from "antd";
import FetchProvider from "@/contexts/FetchContext";
import PageSettingProvider from "@/contexts/PageSettingContext";
import "./globals.css";
import Header from "@/components/main/Header/Header";
import Footer from "@/components/main/Footer/Footer";
import { Kanit, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Kanit({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const noto = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const fetchLogo = async () => {
  const header = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/logo/header`,
    { cache: "no-store" }
  );
  const footer = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/logo/footer`,
    { cache: "no-store" }
  );

  return { header: await header.json(), footer: await footer.json() };
};

const fetchContact = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/contact-lists`,
    { cache: "no-store" }
  );

  return res?.json();
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const logos = await fetchLogo();
  const contact = await fetchContact();

  return (
    <html lang={lng} dir={dir(lng)}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: roboto.style.fontFamily,
          },
        }}
      >
        <FetchProvider>
          <PageSettingProvider>
            <body
              className={
                lng !== "jp" ? `${roboto.className}` : `${noto.className} `
              }
            >
              <Header
                logo={logos?.header?.image}
                contact={contact}
                lang={lng}
              />
              {children}
              <Footer
                logo={logos?.footer?.image}
                contact={contact}
                lang={lng}
              />
            </body>
            <GoogleTagManager gtmId="GTM-TG32H5PG" />
          </PageSettingProvider>
        </FetchProvider>
      </ConfigProvider>
    </html>
  );
}
