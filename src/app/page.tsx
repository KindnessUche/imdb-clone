import ClientFetch from "./components/ClientFetch";
import { Suspense } from "react";
import Image from "next/image";
const API_KEY = process.env.API_KEY;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ genre: string }>;
}) {
  const search = await searchParams;
  const genre = search.genre || "fetchTrending";
  return (
    <div>
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
        <ClientFetch genre={genre} apiKey={API_KEY} />
      </Suspense>
    </div>
  );
}
