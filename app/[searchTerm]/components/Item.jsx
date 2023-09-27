import Link from "next/link";
import React from "react";

const Item = ({ result }) => {
  const tile = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  return result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
      <div className="flex gap-4">
        <div className="flex flex-col justify-center">
          <img
            src={result.thumbnail.source}
            alt={result.ttileee}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {tile}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg"> {tile} </article>
  );
};

export default Item;
