import { Map, List } from 'immutable';


const defaultState = Map({
  byId: Map(),
  allIds: List(),
});


const events = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default events;
