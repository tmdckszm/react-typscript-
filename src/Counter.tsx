import React, { useReducer } from 'react';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <p>
        현재 카운터 값은 <b> {state.value}</b>
      </p>
      <button type="submit" onClick={() => dispatch({ type: 'INCREMENT' })}>
        +1
      </button>
      <button type="submit" onClick={() => dispatch({ type: 'DECREMENT' })}>
        -1
      </button>
    </>
  );
};

export default Counter;
