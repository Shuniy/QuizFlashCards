export const EDIT_DECK = 'EDIT_DECK';

export const editDeck = (oldTitle, newTitle) => ({
  type: EDIT_DECK,
  oldTitle,
  newTitle,
});
