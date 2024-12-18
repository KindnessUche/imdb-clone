"use client";

import Results from "./Results";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Loader from "./Loader";

export default function ClientFetch({ genre }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3${
            genre === "fetchTopRated"
              ? "/movie/top_rated"
              : "/trending/all/week"
          }?api_key=2a1f785ebb28b3255fd4c10ed17bf7ce&language=en-US&page=${page}`,
          {
            next: { revalidate: 10000 },
          }
        );
        const dat = await res.json();
        setData(dat);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page, genre]);

  if (loading) return <Loader />;
  return (
    <div>
      {data && data.results && data.results.length > 0 && (
        <Results results={data.results} />
      )}
      {data && data.total_pages > 1 && (
        <Pagination
          resultPages={data.total_pages}
          page={page}
          handleAdd={() =>
            page < data.total_pages
              ? setPage((prevPage) => prevPage + 1)
              : undefined
          }
          handleSub={() =>
            page > 1 ? setPage((prevPage) => prevPage - 1) : undefined
          }
        />
      )}
    </div>
  );
}
