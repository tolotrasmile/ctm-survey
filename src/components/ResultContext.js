import React from 'react';
import { navigate } from '@reach/router';
import { v4 } from 'node-uuid';

const Context = React.createContext();

const { Consumer, Provider } = Context;

const merge = (oldState, newState) => ({ ...oldState, ...newState });

function ResultProvider({ children }) {
  const [state, dispatch] = React.useReducer(merge, {});
  function save() {
    try {
      const rawData = window.localStorage.getItem('@ctm-voting');
      const item = { id: v4(), data: state, date: new Date() };
      const newData = [...(JSON.parse(rawData) || []), item];
      window.localStorage.setItem('@ctm-voting', JSON.stringify(newData));
    } catch (error) {
      // print error
    }
    navigate('/');
  }
  return <Provider value={[state, dispatch]}>{children({ state, dispatch, save })}</Provider>;
}

export { Consumer, ResultProvider };

export default Context;
