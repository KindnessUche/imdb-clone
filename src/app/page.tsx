import ClientFetch from "./components/ClientFetch";
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
      <ClientFetch genre={genre} apiKey={API_KEY} />
    </div>
  );
}
