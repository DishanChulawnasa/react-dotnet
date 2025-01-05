import axios from "axios";

const BASE_URL = "https://localhost:7053/api/dCandidate";

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: "GET_USERS_REQUEST",
  });
  try {
    const response = await axios.get(BASE_URL);
    dispatch({
      type: "GET_USERS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USERS_FAIL",
      payload: error.message,
    });
  }
};

export const getUserById = (id) => async (dispatch) => {
  dispatch({
    type: "GET_USER_BY_ID_REQUEST",
  });
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    dispatch({
      type: "GET_USER_BY_ID_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_BY_ID_FAIL",
      payload: error.message,
    });
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    await axios.post(BASE_URL, user);
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    await axios.put(BASE_URL + "/id?id=" + id, user);
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(BASE_URL + "/" + id);
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};
