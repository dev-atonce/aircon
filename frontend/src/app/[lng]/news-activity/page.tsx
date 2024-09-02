import BlogSection from "@/components/main/BlogSection/BlogSection";
import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import TopSection from "@/components/main/TopSection/TopSection";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "news-activity";

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

export default function NewsPage({ params }: Props) {
  const lang = params.lng.toUpperCase();
  return (
    <>
      <Loading />
      <Cover
        pageName={"page.blog"}
        prevPage={{ pageName: "page.home", url: "/" }}
        lang={params.lng}
      />
      <div className="container mx-auto">
        <TopSection lang={params.lng} />
        <h2 className="text-2xl font-semibold text-slate-800">
          ข่าวสาร / กิจกรรม
        </h2>
        <BlogSection
          limit={12}
          typeBlog={["general", "customer", "selfedit"]}
          home={false}
          lang={lang}
        />
      </div>
    </>
  );
}
