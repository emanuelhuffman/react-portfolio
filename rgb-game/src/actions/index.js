export const getState = () => {
  return {
    type: "GET_STATE",
  };
};

export const handleGuess = (guess) => {
  return {
    type: "GUESS",
    payload: guess,
  };
};

export const newColors = () => {
  return {
    type: "NEW_COLORS",
  };
};

export const changeLevel = (level) => {
  return { type: "CHANGE_LEVEL", payload: level };
};
