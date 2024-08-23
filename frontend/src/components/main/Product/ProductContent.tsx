import DynamicContent from "../DynamicContent/DynamicContent";

export default function ProductContent({ data, lang }: any) {
  return (
    <div className="w-full">
      <div className="py-4">
        <div className=" overflow-x-scroll rounded-xl  ">
          <DynamicContent content={data[`serviceDetail${lang}`]} />
        </div>
      </div>
    </div>
  );
}
