import ClientFetch from "./components/ClientFetch";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: any) {
  let search = await searchParams;
  const genre = search.genre || "fetchTrending";
  return (
    <div>
      <ClientFetch genre={genre} />
    </div>
  );
}
