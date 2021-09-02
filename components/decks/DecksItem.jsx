import React, { useState } from 'react';
import { Card, IconButton, Menu } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeDeck } from '../../actions';

export const DecksItem = ({ deckName, cards, navigate }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const toggleDelete = () => dispatch(removeDeck(deckName));

  return (
    <Card style={styles.card} onPress={() => navigate(deckName, cards)}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {deckName}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {`${cards} ${cards === 1 ? 'Card' : 'Cards'}`}
          </Text>
        </View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton icon="dots-vertical" color="black" onPress={openMenu} style={styles.menu} />
          }>
          <Menu.Item onPress={toggleDelete} title="Delete" />
        </Menu>
      </Card.Content>
    </Card>
  );
};

export default DecksItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,

    elevation: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 1,
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 35,
    paddingRight: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#BDBDBD',
    lineHeight: 25,
  },
  menu: {
    marginTop: -5,
    marginRight: -10,
    flexShrink: 0,
  },
});
