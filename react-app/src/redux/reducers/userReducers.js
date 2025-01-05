const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case "GET_USERS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "GET_USER_BY_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_BY_ID_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "GET_USER_BY_ID_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    default:
      return state;
  }
}
