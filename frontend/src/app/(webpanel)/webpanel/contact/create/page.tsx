"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddressForm from "@/components/webpanel/AddressForm/AddressForm";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import { FetchContext } from "@/contexts/FetchContext";
import { useContext, useEffect, useState } from "react";

export default function AddressCreatePage({ params: { id } }: any) {
  const [data, setData] = useState({});
  const { onFetchOne, onSave }: any = useContext(FetchContext);
  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  //   @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i.toUpperCase());

  const onCreate = async () => {
    onSave(
      data,
      "POST",
      null,
      "address",
      //   @ts-ignore
      `Create New Address:${data?.nameEN || data?.nameTH}`
    );
    // onSave(data, "PUT", id, "address", `Edit Address ${data?.nameEN}`);
  };

  const onChangeState = (e: any, field: string) => {
    setData((prevState: any) => ({ ...prevState, [field]: e }));
  };

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={`Create New Address`}
        prevPage={{ pageName: `Contact`, url: "/webpanel/contact" }}
      />

      <AddressForm
        languages={languages}
        onSave={onCreate}
        data={data}
        onChangeState={onChangeState}
        id={id}
      />
    </DefaultLayout>
  );
}