export const REMOVE_DECK = 'REMOVE_DECK';

export const removeDeck = (title) => ({
  type: REMOVE_DECK,
  title,
});
