import { Map } from 'immutable';


const defaultState = Map({
  isLoading: false,
});


const app = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default app;
