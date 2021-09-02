export const ADD_QUESTION = 'ADD_QUESTION';

export const addQuestion = (deck, question) => ({
  type: ADD_QUESTION,
  deck,
  question,
});
