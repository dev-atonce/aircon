import { useState } from "react";
import Jodit from "../Editor/Jodit";
import FormGroup from "../FormGroup/FormGroup";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import TextEditor from "@/components/TextEditor";

export default function ServiceForm({
  languages,
  onSaveGeneral,
  serviceState,
  onChangeState,
  id,
  onSaveSeo,
  onChangeSeoState,
  onDeleteImageGallery,
  editor,
}: any) {
  const [langState, setLangState] = useState(
    process.env.NEXT_PUBLIC_MAIN_LANGUAGE
  );

  return (
    <div className="grid grid-cols-1 gap-y-9 sm:grid-cols-1 ">
      <FormGroup
        // onSave={onSaveGeneral}
        formLabel="General Info."
        inputBox={[
          {
            label: "Project Name",
            placeHolder: "Service",
            state: serviceState,
            setState: onChangeState,
            keyProp: "serviceName",
            type: "input",
            languages: languages,
            required: true,
          },

          {
            label: "Image",
            placeHolder: "image",
            state: serviceState,
            setState: onChangeState,
            keyProp: "image",
            type: "image",
            ratio: "3/2",
            required: true,
            height: "200px",
            multiple: false,
          },
          {
            label: "Image ALT",
            placeHolder: "alt",
            state: serviceState,
            setState: onChangeState,
            keyProp: "imageAlt",
            type: "input",
            required: true,
          },
        ]}
      />
      {editor.editor === true && (
        <div className="col-span-2">
          <div className="bg-white rounded-lg p-2">
            <h5>Detail</h5>
            <div className="flex gap-[1px] translate-y-2 translate-x-2 relative z-0">
              {languages.map((i: any, k: any) => (
                <button
                  key={k}
                  onClick={() => setLangState(i?.toLowerCase())}
                  className={`${langState === i?.toLowerCase() ? "border-primary text-primary scale-[110%] " : "  border-slate-200 text-slate-200"} uppercase transition-all duration-100 items-center justify-center rounded-md border  px-2 py-1 text-center font-medium hover:bg-opacity-90 `}
                >
                  {i}
                </button>
              ))}
            </div>
            {languages?.map(
              (i: any, k: any) =>
                i?.toLowerCase() === langState && (
                  <TextEditor
                    key={k}
                    id={`${editor.name}${i.toUpperCase()}`}
                    dataType="project"
                    dataId={id}
                    setState={onChangeState}
                    state={serviceState}
                    prop={serviceState && `${editor.name}${i.toUpperCase()}`}
                    placeholder="Detail"
                    editor={editor}
                  />
                )
            )}
          </div>
        </div>
      )}
      <button
        onClick={onSaveGeneral}
        className="mt-[-20px] flex w-full col-span-2 justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
      >
        Save
      </button>
    </div>
  );
}
