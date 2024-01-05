import { useReducer } from 'react';

type ActionType = 'add' | 'subtract' | 'clear';

type Action = {
  type: ActionType;
};

const counterReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'add': {
      return ++state;
    }
    case 'subtract': {
      return --state;
    }
    case 'clear': {
      return 0;
    }
    default: {
      throw new Error(`${action.type} not supported`);
    }
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const actions: { name: Uppercase<ActionType>; action: Action }[] = [
    { name: 'ADD', action: { type: 'add' } },
    { name: 'CLEAR', action: { type: 'clear' } },
    { name: 'SUBTRACT', action: { type: 'subtract' } },
  ];

  return (
    <main>
      <h1>useReducer</h1>
      <h2 data-testid="count">Count: {count}</h2>
      <div>
        {actions.map((action) => (
          <button
            key={action.name}
            onClick={() => dispatch(action.action)}
            style={{ margin: '20px' }}
          >
            {action.name}
          </button>
        ))}
      </div>
    </main>
  );
};

export default UseReducer;
