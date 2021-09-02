export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const removeQuestion = (deckName, question) => ({
  type: REMOVE_QUESTION,
  deckName,
  question,
});
