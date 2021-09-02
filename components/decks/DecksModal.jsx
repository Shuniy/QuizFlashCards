import React, { useState } from 'react';
import { Modal, Card, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addDeck } from '../../actions';
import { ModalButton } from '../global/ModalButton';

export const DecksModal = ({ visible, hideModal, title, setTitle, toDeck }) => {
  const deckNames = useSelector((state) => Object.values(state.decks).map((deck) => deck.title));
  const [errorTitle, setErrorTitle] = useState(false);
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (!deckNames.includes(title) && title !== '') {
      dispatch(addDeck(title));
      toDeck(title, 0);
      setErrorTitle(false);
      hideModal();
    }
    setErrorTitle(title === '');
  };

  const handleHideModal = () => {
    setErrorTitle(false);
    hideModal();
  };

  return (
    <Modal visible={visible} dismissable={false}>
      <Card style={styles.card}>
        <Card.Title title="Create New Deck" />
        <Card.Content>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            mode="outlined"
            label="Deck Name"
            theme={{
              colors: {
                primary: '#000',
              },
            }}
            error={errorTitle}
          />
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <ModalButton onPress={handleHideModal} mode="text">
            Cancel
          </ModalButton>
          <ModalButton onPress={handleCreate} mode="contained">
            Create
          </ModalButton>
        </Card.Actions>
      </Card>
    </Modal>
  );
};

export default DecksModal;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,

    elevation: 0,
  },
  cardActions: { justifyContent: 'flex-end', padding: 15 },
});
