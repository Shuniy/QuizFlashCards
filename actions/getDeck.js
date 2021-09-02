export const GET_DECK = 'GET_DECK';

export const getDeck = (title) => ({
  type: GET_DECK,
  title,
});
