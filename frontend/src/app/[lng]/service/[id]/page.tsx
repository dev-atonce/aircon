import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import ProductContent from "@/components/main/Product/ProductContent";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: { lng: string; id: string };
}

const fetchService = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/service/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};
const pageName = "service";
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const data = await fetchService(params.id);
  const lang = params.lng.toUpperCase();

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/seo/page-name/${pageName}`;

  // fetch data
  const data = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    title: data[`seoTitle${lang}`],
    description: data[`seoDescription${lang}`],
    keywords: data[`seoKeyword${lang}`],
  };
}

export default async function ServicePage({ params }: Props) {
  const data = await fetchService(params.id);
  const lang = params.lng.toUpperCase();

  if (data?.error) {
    redirect("/");
  }

  return (
    <>
      <Loading />
      <Cover
        pageName={data[`serviceName${lang}`]}
        prevPage={{ pageName: "page.home", url: "/" }}
        lang={params.lng}
      />
      <div className="container mx-auto">
        <div className="">
          <ProductContent data={data} lang={lang} />
        </div>
      </div>
    </>
  );
}
