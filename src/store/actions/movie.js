import { GET, ERROR, ADD_POST, DEL_POST } from "./types";
const baseUrl = "https://jsonplaceholder.typicode.com";

export const getMovies = () => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/todos`);
    const data = await res.json();
    dispatch({
      type: GET,
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error
    });
  }
};

export const addMovie = data => async dispatch => {
  try {
    const thisData = {
      title: data
    };
    const send = await fetch(`${baseUrl}/todos`, {
      method: ADD_POST,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(thisData)
    });
    const res = await send.json();
    dispatch({
      type: ADD_POST,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    });
  }
};

export const deleteMovie = id => async dispatch => {
  try {
    const deleteData = await fetch(`${baseUrl}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    await deleteData.json();
    dispatch({
      type: DEL_POST,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    });
  }
};
