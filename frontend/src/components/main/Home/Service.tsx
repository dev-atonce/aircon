import ServiceSection from "../ServiceSection/ServiceSection";

export default function Client({ data }: any) {
  return (
    <div className=" pt-6 sm:pb-14  relative project ">
      <h4 className="text-2xl font-semibold text-slate-800 text-center mb-4">
        บริการของเรา
      </h4>
      <ServiceSection data={data} />
    </div>
  );
}