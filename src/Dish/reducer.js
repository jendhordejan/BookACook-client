const initialState = {
  dishes: [],
  dish: {}
};

export default (state = initialState, { type, payload }) => {
  // console.log(`TYPE: ${type} || PAYLOAD: ${payload}`);
  switch (type) {
    default:
      return state;
  }
};
