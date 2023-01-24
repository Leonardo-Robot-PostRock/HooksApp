import React, { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const pRef = useRef();

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    return () => {};
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
