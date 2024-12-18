import React from "react";
import ClientSearch from "../../components/ClientSearch";
const API_KEY = process.env.API_KEY;
export default async function Searchpage({ params }) {
  const searchTerm = await params.searchTerm;
  return <ClientSearch searchTerm={searchTerm} apiKey={API_KEY} />;
}
