import { UPDATE_DATA } from '../actions/formActions';

export default function formReducer(state = { data: [] }, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
