import Link from "next/link";
import Image from "next/image";
import "../../../css/custom.scss";

export function Logo({ color, img }: any) {
  return (
    <div className="">
      <Link href="/" className="_links">
        {img && (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${img}`}
            alt="rent"
            width={200}
            height={200}
          />
        )}
      </Link>
    </div>
  );
}
