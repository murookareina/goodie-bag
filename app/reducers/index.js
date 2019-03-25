//ACITON TYPES
const SET_CANDIES = 'SET_CANDIES';

//ACTION CREATORS
export const setCandiesActionCreator = candies => ({
  type: SET_CANDIES,
  candies,
});

const initialState = {
  candies: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CANDIES: {
      return { candies: action.candies };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
