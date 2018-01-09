export const fetchCats = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CATS" });
    fetch("http://localhost:4000/db")
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        let cats = responseJSON.images;
        dispatch({ type: "FETCH_CATS", payload: cats });
      });
  };
};
