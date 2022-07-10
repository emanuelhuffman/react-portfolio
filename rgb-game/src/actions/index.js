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
