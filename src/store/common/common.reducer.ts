import { AnyAction } from 'redux';

import { State } from '../../entities/State';

import * as ACTIONS from './common.actions-consts';

const initialState: State = {
  counter: 1
};

const reducerCommon = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.TEST_ACTION:
      return {
        ...state,
        counter: ++state.counter
      };

    default:
      return state;
  }
};

export default reducerCommon;
