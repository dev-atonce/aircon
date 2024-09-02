import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import TopSection from "@/components/main/TopSection/TopSection";
import ServiceSection from "@/components/main/ServiceSection/ServiceSection";
import { Metadata, ResolvingMetadata } from "next";
import MoreInfo from "@/components/main/MoreInfo/MoreInfo";


const pageName = "service";

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

export default function ServicePage({ params }: Props) {
  const lang = params.lng.toUpperCase();
  return (
    <>
      <Loading />
      <Cover
        pageName={"page.service"}
        prevPage={{ pageName: "page.home", url: "/" }}
        lang={params.lng}
      />
      <div className="container mx-auto py-4">
        <TopSection lang={params.lng} />
        <h2 className="text-2xl font-semibold text-slate-800 text-start mb-4">
          บริการของเรา
        </h2>
        <ServiceSection lang={lang} />
      </div>
      <MoreInfo lang={lang} />
    </>
  );
}
