import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ScrollFade } from '../global/ScrollFade';

export const CardsItem = ({ question }) => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <ScrollFade position={{ top: 10 }} />
          <ScrollView>
            <Text style={{ fontSize: 25, lineHeight: 30 }}>{question}</Text>
          </ScrollView>
          <ScrollFade top={false} position={{ bottom: 15 }} />
        </Card.Content>
      </Card>
    </View>
  );
};

export default CardsItem;

const styles = StyleSheet.create({
  cardContainer: {
    flexGrow: 0.5,
    flexBasis: 0.5,
    flexShrink: 0,
    aspectRatio: 1,
  },
  card: {
    flex: 1,
    margin: 5,

    elevation: 10,
  },
  cardContent: {
    flex: 1,
  },
});
