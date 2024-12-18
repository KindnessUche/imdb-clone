"use client";
export default function Pagination({
  resultPages,
  page,
  handleAdd,
  handleSub,
}) {
  return (
    <div className="max-w-6xl mx-auto pt-4 pb-20 flex justify-center px-5">
      <button
        className="mr-auto rounded bg-white dark:bg-slate-700 px-4 py-1 shadow-sm outline outline-amber-500 disabled:opacity-30"
        disabled={page === 1}
        onClick={handleSub}
      >
        PREVIOUS
      </button>
      <p className="mr-auto self-center text-xl">{page}</p>
      <button
        className="rounded bg-white dark:bg-slate-700 px-4 py-1 outline outline-amber-500 shadow-sm disabled:opacity-30"
        disabled={page === resultPages}
        onClick={handleAdd}
      >
        NEXT
      </button>
    </div>
  );
}
