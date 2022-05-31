import './App.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { testAction } from './store/common/common.actions';

import { State } from './entities/State';

// import logo from './logo.svg';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: { common: State }) => state.common.counter);

  return (
    <>
      <div className="App">Default react-redux template</div>
      <button onClick={() => dispatch(testAction())}>
        Click me: <span>{counter}</span>
      </button>
    </>
  );
}

export default App;
