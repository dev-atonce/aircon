import Cover from "@/components/main/Cover/Cover";
import DynamicContent from "@/components/main/DynamicContent/DynamicContent";
import Loading from "@/components/main/Loading/Loading";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "about-us";

export async function generateMetadata(
  { params, searchParams }: any,
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

const fetchAbout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/about-us`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export default async function AboutPage({ params: { lng } }: any) {
  const about = await fetchAbout();
  const lang = lng.toUpperCase();
  return (
    <>
      <Loading />
      <Cover
        pageName={lng}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
        lang={lang}
      />
      <div className="container mx-auto">
        <DynamicContent content={about[`aboutUs${lang}`]} />
      </div>
    </>
  );
}
