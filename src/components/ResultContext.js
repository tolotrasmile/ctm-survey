import React from 'react';

const Context = React.createContext();

const { Consumer, Provider } = Context;

const merge = (oldState, newState) => ({ ...oldState, ...newState });

function ResultProvider({ children }) {
  const [state, dispatch] = React.useReducer(merge, {});
  return <Provider value={[state, dispatch]}>{children(state, dispatch)}</Provider>;
}

export { Consumer, ResultProvider };

export default Context;
