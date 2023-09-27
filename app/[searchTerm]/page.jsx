import { getWikiResults } from "@/lib/getWikiResults";
import Item from "./components/Item";

export const generateMetadata = async ({ params: { searchTerm } }) => {
  const resultData = getWikiResults(searchTerm);
  const results = await resultData;

  const displayResult = searchTerm.replaceAll("%20", " ");

  if (!results?.query?.pages)
    return {
      title: `${displayResult} Not Found`,
    };

  return {
    title: `Results for ${displayResult}`,
    descripton: `Search results for ${displayResult}`,
  };
};

const SearchPage = async ({ params: { searchTerm } }) => {
  const resultData = getWikiResults(searchTerm);
  const results = await resultData;
  const wikiData = results?.query?.pages;

  return (
    <main main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {wikiData ? (
        Object.values(wikiData).map((result) => (
          <Item result={result} key={result.pageid} />
        ))
      ) : (
        <h2 className="text-xl p-2">
          Could not fetch result for "{searchTerm}"
        </h2>
      )}
    </main>
  );
};

export default SearchPage;
