const randRGBColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const initAnswer = randRGBColor();

const initialState = {
  rgbValues: [initAnswer, randRGBColor(), randRGBColor()],
  answer: initAnswer,
  feedback: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STATE":
      return state.rgbValues;

    case "GUESS":
      console.log("guessed");
      return action.payload;

    case "RANDOM_COLOR":
      const newAnswer = randRGBColor();
      const newRGBValues = [newAnswer, randRGBColor(), randRGBColor()];
      return { ...state, answer: newAnswer, rgbValues: newRGBValues };

    default:
      return state;
  }
};

export default gameReducer;
