import Cover from "@/components/main/Cover/Cover";
import Loading from "@/components/main/Loading/Loading";
import { Metadata, ResolvingMetadata } from "next";
import Contactform from "@/components/main/Contact/ContactForm";
import { useTranslation } from "../../i18n";

const pageName = "contact";
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

const fetchData = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/contact-lists/`,
    { cache: "no-store" }
  );
  return await data.json();
};

export default async function ContactPage({ params }: Props) {
  const contact = await fetchData();
  const lang = params.lng.toUpperCase();
  const { t } = await useTranslation(params.lng);

  return (
    <>
      <Loading />
      <Cover
        pageName={"page.contact-us"}
        prevPage={{ pageName: "page.home", url: "/" }}
        lang={params.lng}
      />
      <div className="container mx-auto">
        <div className="py-2 grid grid-cols-2 gap-4  pb-4 w-full">
          <div className="flex flex-col gap-2 col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-2 ">
              <div className="py-4 border-b border-slate-300">
                <h5 className="text-2xl font-semibold ">
                  {contact[`name${lang}`]}
                </h5>
                <p>{contact[`address${lang}`]}</p>
              </div>
              <div className="py-4 ">
                <h5 className="text-2xl font-semibold ">
                  {t("contact.title")}
                </h5>
                <p>
                  {t("contact.telephone")} :{contact?.telephone}{" "}
                </p>
                <p>
                  {t("contact.email")} : {contact?.email}
                </p>
                <p>{t("contact.line")} : {contact?.line}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 ">
            <h6 className="text-xl font-semibold text-slate-600">
              {t("contact.contact-form")}
            </h6>
            <Contactform lang={params.lng}/>
          </div>
        </div>
        <div className="py-6">
          <div dangerouslySetInnerHTML={{ __html: contact?.gMap }}></div>
        </div>
      </div>
    </>
  );
}
