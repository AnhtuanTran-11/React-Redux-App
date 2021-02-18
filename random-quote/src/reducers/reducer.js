import { FETCH_PIC_LOADING, FETCH_PIC_SUCCESS, FETCH_PIC_FAIL} from "../actions/appActions";

const initialState = {
  pic: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_PIC_LOADING):
      return({
        ...state,
        isFetching: true
      });

    case(FETCH_PIC_SUCCESS):
      return({
        ...state,
        pic: action.payload,
        isFetching: false
      });

    case(FETCH_PIC_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      });

    default:
      return state;
  }
};