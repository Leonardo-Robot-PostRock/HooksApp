import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment, reset } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  const getNextQuote = () => {
    if (counter >= 5) reset();
    else increment(1);
  };

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button className="btn btn-primary" onClick={getNextQuote} disabled={isLoading}>
        Next quote
      </button>
    </>
  );
};
