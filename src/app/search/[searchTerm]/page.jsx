import React from "react";
import ClientSearch from "../../components/ClientSearch";
import Image from "next/image";
import { Suspense } from "react";
const API_KEY = process.env.API_KEY;
export default async function Searchpage({ params }) {
  const searchTerm = await params.searchTerm;

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
      <ClientSearch searchTerm={searchTerm} apiKey={API_KEY} />
    </Suspense>
  );
}
