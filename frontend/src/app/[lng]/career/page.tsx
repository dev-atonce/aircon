import BlogSection from "@/components/main/BlogSection/BlogSection";
import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import TopSection from "@/components/main/TopSection/TopSection";
import { Metadata, ResolvingMetadata } from "next";

const pageName = "career";

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

export default function CareerPage({ params: { lng } }: any) {
  const lang = lng.toUpperCase();
  return (
    <>
      <Loading />
      <Cover
        pageName={lang}
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
        lang={lang}
      />
      <div className="container mx-auto">
        <TopSection lang={lang} />
        <h4 className="text-2xl font-semibold text-slate-800">ร่วมงานกับเรา</h4>
        <BlogSection
          limit={8}
          typeBlog={["recruitment"]}
          home={false}
          lang={lang}
        />
      </div>
    </>
  );
}
