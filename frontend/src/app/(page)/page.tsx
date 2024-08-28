import { redirect } from "next/navigation";

export default function Home({params}: {params: {lng: string}}) {
  redirect(`/th`);
}
