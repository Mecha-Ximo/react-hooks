import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const UseRef = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const colors = useMemo(() => ['red', 'blue', 'green'], []);

  const setColor = useCallback(
    (index: number) => {
      if (divRef.current) {
        divRef.current.style.backgroundColor = colors[index];
      }
    },
    [colors]
  );

  useEffect(() => {
    setColor(index);
  }, [setColor, index]);

  const handleClick = () => {
    setIndex((p) => (p === colors.length - 1 ? 0 : p + 1));
  };

  return (
    <main>
      <h1>Use Ref Hook</h1>
      <div
        ref={divRef}
        style={{
          width: '200px',
          height: '200px',
        }}
      ></div>
      <button onClick={handleClick}>Change color</button>
    </main>
  );
};

export default UseRef;
