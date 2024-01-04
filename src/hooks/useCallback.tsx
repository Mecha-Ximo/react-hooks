import { memo, useCallback, useEffect, useRef, useState } from 'react';

const UseCallback = () => {
  const [state, setState] = useState(0);
  const handleRerenderUseCallback = useCallback(() => {}, []);

  const handleRerenderWithoutUseCallback = () => {};

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState((p) => p + 1);
    }, 750);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <h1>Use Callback Hook</h1>
      <p>Parent renders: {state}</p>
      <MemoChild
        title="Child with useCallback"
        updateRerender={handleRerenderUseCallback}
      />
      <MemoChild
        title="Child without useCallback"
        updateRerender={handleRerenderWithoutUseCallback}
      />
    </main>
  );
};

export default UseCallback;

const Child = (props: { updateRerender: () => void; title: string }) => {
  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  return (
    <section>
      <h4>{props.title}</h4>
      <p>Renders: {renders.current}</p>
    </section>
  );
};

const MemoChild = memo(Child);
