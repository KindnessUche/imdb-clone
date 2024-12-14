export default function Results({ results }: any): any {
  return (
    <div>
      {results.map((result: any) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
