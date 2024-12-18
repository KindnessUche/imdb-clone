import React from "react";
import ClientSearch from "../../components/ClientSearch";

export default async function Searchpage({ params }) {
  const searchTerm = await params.searchTerm;
  return <ClientSearch searchTerm={searchTerm} />;
}
