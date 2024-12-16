"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Pagination({ resultPages, onPageChange }) {
  const [currPage, setCurrPage] = useState(1);
  // useEffect(() => {
  //   onPageChange(currPage);
  // }, [currPage, onPageChange]);
  return (
    <div className="max-w-6xl mx-auto pt-4 pb-20 flex justify-center px-5">
      <button
        className="mr-auto rounded bg-white dark:bg-slate-700 px-4 py-1 shadow-sm outline outline-amber-500 disabled:opacity-30"
        disabled={currPage === 1}
        onClick={() => (currPage > 1 ? setCurrPage(currPage - 1) : undefined)}
      >
        PREVIOUS
      </button>
      <p className="mr-auto self-center text-xl">{currPage}</p>
      <button
        className="rounded bg-white dark:bg-slate-700 px-4 py-1 outline outline-amber-500 shadow-sm disabled:opacity-30"
        disabled={currPage === resultPages}
        onClick={() =>
          currPage < resultPages ? setCurrPage(currPage + 1) : undefined
        }
      >
        NEXT
      </button>
    </div>
  );
}
