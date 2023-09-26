import { getWikiResults } from "@/lib/getWikiResults";
import { notFound } from "next/navigation";

const SearchPage = async ({ params: { searchTerm } }) => {
  const resultData = getWikiResults(searchTerm);
  const results = await resultData;
  const wikiData = results?.query?.pages;

  if (!wikiData) notFound();

  return (
    <main main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {wikiData ? (
        Object.values(wikiData).map((result) => (
          <p key={result}>{JSON.stringify(result)}</p>
        ))
      ) : (
        <h2 className="text-xl p-2">Could not result for ${searchTerm}</h2>
      )}
    </main>
  );
};

export default SearchPage;
