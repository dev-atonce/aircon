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

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await fetchService(params.id);
  const lang = params.lng.toUpperCase();

  return {
    title: data?.serviceSeo[`title${lang}`],
    description: data?.serviceSeo[`description${lang}`],
    keywords: data?.serviceSeo[`keyword${lang}`],
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
