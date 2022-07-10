const randRGBColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const shuffle = (arr) => {
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

const initAnswer = randRGBColor();

const initialState = {
  rgbValues: [initAnswer, randRGBColor(), randRGBColor()],
  answer: initAnswer,
  feedback: "none",
  level: "easy",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STATE":
      return state.rgbValues;

    case "GUESS":
      if (action.payload === state.answer) {
        return { ...state, feedback: "correct" };
      } else {
        return { ...state, feedback: "wrong" };
      }

    case "NEW_COLORS":
      const newAnswer = randRGBColor();
      let newRGBValues = [];
      if (state.level === "easy") {
        newRGBValues = [newAnswer, randRGBColor(), randRGBColor()];
      } else {
        newRGBValues = [
          newAnswer,
          randRGBColor(),
          randRGBColor(),
          randRGBColor(),
          randRGBColor(),
          randRGBColor(),
        ];
      }

      return {
        ...state,
        answer: newAnswer,
        rgbValues: shuffle(newRGBValues),
        feedback: "none",
      };

    case "CHANGE_LEVEL":
      const newLevelAnswer = randRGBColor();
      if (action.payload === "hard") {
        return {
          ...state,
          level: "hard",
          rgbValues: shuffle([
            newLevelAnswer,
            randRGBColor(),
            randRGBColor(),
            randRGBColor(),
            randRGBColor(),
            randRGBColor(),
          ]),
          answer: newLevelAnswer,
          feedback: "none",
        };
      } else {
        return {
          ...state,
          level: "easy",
          rgbValues: shuffle([newLevelAnswer, randRGBColor(), randRGBColor()]),
          answer: newLevelAnswer,
          feedback: "none",
        };
      }

    default:
      return state;
  }
};

export default gameReducer;
