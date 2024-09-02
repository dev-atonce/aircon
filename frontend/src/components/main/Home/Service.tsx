import ServiceSection from "../ServiceSection/ServiceSection";

interface ServiceProp {
  lang: string;
}

export default function Service({ lang }: ServiceProp) {
  return (
    <div className="pt-6 sm:pb-14 relative project">
      <h2 className="text-2xl font-semibold text-slate-800 text-center mb-4">
        บริการของเรา
      </h2>
      <ServiceSection lang={lang} />
    </div>
  );
}
