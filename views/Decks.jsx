import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FAB, Portal } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import Container from '../components/global/Container';
import DecksItem from '../components/decks/DecksItem';
import DecksModal from '../components/decks/DecksModal';

const Decks = ({ navigation }) => {
  const [newDeckTitle, setNewDeckTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();
  const decks = useSelector((state) =>
    Object.values(state.decks)
      .slice(0, -1)
      .map((deck) => ({ title: deck.title, cards: deck.questions.length, id: deck.id }))
  );

  const toDeck = (title, cards) => navigation.navigate('Cards', { deckName: title, cards });
  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
    setNewDeckTitle('');
  };

  return (
    <Container>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <DecksItem deckName={item.title} cards={item.cards} navigate={toDeck} key={item.id} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
      />
      <Portal>
        <DecksModal
          visible={visible && isFocused}
          title={newDeckTitle}
          setTitle={setNewDeckTitle}
          toDeck={toDeck}
          hideModal={hideModal}
        />
        <FAB style={styles.fab} icon="plus" onPress={showModal} visible={isFocused && !visible} />
      </Portal>
    </Container>
  );
};

export default Decks;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,

    color: 'white',
    backgroundColor: 'black',

    elevation: 20,
  },
  list: {
    paddingTop: 10,
    backgroundColor: 'white',
  },
  listContainer: { paddingBottom: 100 },
});
