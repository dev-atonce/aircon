import Loading from "@/components/main/Loading/Loading";
import CoverSwiper from "@/components/main/Cover/CoverSwiper";
import About from "@/components/main/Home/About";
import Blog from "@/components/main/Home/Blog";
import Contact from "@/components/main/Home/Contact";
import Client from "@/components/main/Home/Client";
import Service from "@/components/main/Home/Service";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "home";

interface Props {
  params: { lng: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = params.lng?.toUpperCase();

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
  };
}

const fetchClient = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/client/`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.rows;
};
const fetchBanner = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/banner`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.rows;
};
const fetchAbout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/home`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

const fetchService = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/service`,
    { cache: "no-store" }
  );

  const result = await res.json();
  return result.rows;
};

export default async function Home({ params }: Props) {
  const lang = params.lng?.toUpperCase();
  const banner = await fetchBanner();
  const client = await fetchClient();
  const about = await fetchAbout();
  const services = await fetchService();

  return (
    <>
      <Loading />
      {/* cover */}
      {/* @ts-ignore */}
      <CoverSwiper banner={banner} />
      <div className="container mx-auto">
        {/* About Us */}
        <About content={about[`aboutUs${lang}`]} lang={lang} />
        {/* Service */}
        <Service lang={lang} services={services} />
      </div>
      {/* About Us 2 */}
      <Contact />
      <div className="container mx-auto" lang={lang}>
        {/*Customer*/}
        <Client data={client} lang={lang} />
        {/* Blog */}
        <Blog lang={lang} />
        {/* <iframe
          src="https://kyoudoh.com/"
          width="100%"
          height="500px"
          title="W3Schools Free Online Web Tutorials"
        ></iframe> */}
      </div>
    </>
  );
}
