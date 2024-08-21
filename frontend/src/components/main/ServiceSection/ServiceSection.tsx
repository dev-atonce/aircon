import ProductCard from "../ProductCard/ProductCard";

const fetchData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/service`,
    { cache: "no-store" }
  );

  const result = await res.json();
  return result.rows;
};

export default async function ServiceSection({ data }: any) {
  const services = await fetchData();
  
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4">
        {services?.map((i: any, k: any) => <ProductCard item={i} key={k} />)}
      </div>
    </div>
  );
}
