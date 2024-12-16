"use client";
import { useEffect } from "react";
export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>{noResultMessage()}</h1>
      <button
        className="hover:text-amber-600"
        onClick={() => {
          reset;
        }}
      >
        Try Again
      </button>
    </div>
  );
}

const noResultMessage = function () {
  let array = [
    "Check if the wifi is down.",
    "Poor Internet connection.",
    "Looks like a network hiccup.",
    "Oops! The signal is playing hard to get.",
    "The internet is shy today.",
  ];
  let index = Math.floor(Math.random() * array.length);
  let chosenText = array[index];
  return chosenText;
};
