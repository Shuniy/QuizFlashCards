import uuid from "react-native-uuid";
import { ADD_DECK, ADD_QUESTION, REMOVE_DECK, EDIT_DECK } from "../actions";
import { decks as INITIAL_STATE } from "../utils/data";
import { combineReducers } from "redux";

Object.removeTitle = (obj, title) =>
  Object.keys(obj)
    .filter((key) => key !== title)
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

const initialState = INITIAL_STATE;

export const decks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, id: uuid.v4(), questions: [] },
      };
    case EDIT_DECK: {
      const newDeck = state;
      newDeck[action.newTitle] = newDeck[action.oldTitle];
      return Object.removeTitle(newDeck, action.title);
    }
    case REMOVE_DECK:
      return Object.removeTitle(state, action.title);
    case ADD_QUESTION:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [...state[action.deck].questions, { ...action.question, id: uuid.v4() }],
        },
      };
    default:
      return state;
  }
};

export default combineReducers({ decks });
