import Cover from "@/components/main/Cover/Cover";
import DynamicContent from "@/components/main/DynamicContent/DynamicContent";
import Loading from "@/components/main/Loading/Loading";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "about-us";

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

const fetchAbout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/about-us/about-us`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export default async function AboutPage({ params }: Props) {
  const about = await fetchAbout();
  const lang = params.lng.toUpperCase();
  return (
    <>
      <Loading />
      <Cover
        pageName={"page.about-us"}
        prevPage={{ pageName: "page.home", url: "/" }}
        lang={params.lng}
      />
      <div className="container mx-auto">
        <DynamicContent content={about[`aboutUs${lang}`]} />
      </div>
    </>
  );
}
