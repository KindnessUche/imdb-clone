"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

export default function NavbarItem({
  title,
  param,
}: {
  title: string;
  param: string;
}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Suspense
      fallback={
        <div className="flex justify-center mt-16">
          <Image
            className="h-52"
            src="spinner.svg"
            alt="loading"
            width={200}
            height={200}
          />
        </div>
      }
    >
      <div>
        <Link
          className={`hover:text-amber-600 font-semibold ${
            genre === param
              ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </div>
    </Suspense>
  );
}
