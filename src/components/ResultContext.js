import React from 'react';
import { navigate } from '@reach/router';
import { v4 } from 'node-uuid';
import { useLocalStorage } from '../utils/hooks';

const Context = React.createContext();

const { Consumer, Provider } = Context;

const merge = (oldState, newState) => ({ ...oldState, ...newState });

function ResultProvider({ children }) {
  const [state, dispatch] = React.useReducer(merge, {});

  const [storage, setStorage] = useLocalStorage('@ctm-voting', []);

  function save() {
    setStorage([...storage, { id: v4(), data: state, date: new Date() }]);
    navigate('/');
  }

  return <Provider value={[state, dispatch]}>{children({ state, dispatch, save })}</Provider>;
}

export { Consumer, ResultProvider };

export default Context;
