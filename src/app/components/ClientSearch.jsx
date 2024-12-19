"use client";

import Results from "./Results";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Loader from "./Loader";

export default function ClientSearch({ searchTerm, apiKey }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchSearch() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=2a1f785ebb28b3255fd4c10ed17bf7ce&query=${searchTerm}&language=en-US&page=${page}&include_adult=false`
        );
        const dat = await res.json();
        setData(dat);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSearch();
  }, [page, searchTerm]);

  if (loading) return <Loader />;
  return (
    <div>
      {data && data.results && data.results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
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
