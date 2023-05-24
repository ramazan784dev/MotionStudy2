
const initialState = {
  l: JSON.parse(localStorage.getItem("add", "EN")) || "EN"
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LANGUAGE":
      return { ...state, l: action.payload};
    default:
      return state;
  }
};
