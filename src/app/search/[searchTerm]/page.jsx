import Results from "../../components/Results";
import Pagination from "../../components/Pagination";
export default async function Searchpage({ params }) {
  const page = 1;
  const searchTerm = await params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=${page}&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  const resultPages = data.total_pages;
  console.log(resultPages);
  if (!res.ok) return "it's Probably the wifi";
  return (
    <div>
      {!results[0] && <h1 className="text-center pt-6">{noResultMessage()}</h1>}
      {results && <Results results={results} />}
      {results && (
        <Pagination
          resultPages={resultPages}
          // onPageChange={(page) => {
          //   page = page;
          // }}
        />
      )}
    </div>
  );
}

const noResultMessage = function () {
  let array = [
    "No results found",
    "Not sure if that even exists",
    "404 results found. Just kidding, we didn’t find anything. Try something else?",
    "Are you sure you're not searching for a unicorn? We couldn’t find it anywhere!",
    "Uh-oh! We’ve searched every nook and cranny, but your query seems to be playing hide and seek!",
  ];
  let index = Math.floor(Math.random() * array.length);
  let chosenText = array[index];
  return chosenText;
};
