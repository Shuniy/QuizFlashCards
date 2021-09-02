import React from 'react';
import { Modal, Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { ModalButton } from '../global/ModalButton';
import { PercentageCircle } from './PercentageCircle';

export const ResultsModal = ({
  visible,
  deckName,
  maxQuestions,
  correct,
  restart,
  quitResults,
}) => {
  const percent = Math.round((correct / maxQuestions) * 100);

  return (
    <Modal visible={visible} contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Your quiz results"
          titleStyle={styles.title}
          subtitle={deckName}
          subtitleStyle={styles.subtitle}
        />
        <Card.Content style={styles.cardContent}>
          <PercentageCircle percent={percent} />
          <View style={styles.textContent}>
            <View style={styles.resultText}>
              <Text style={styles.textCorrect}>{correct}</Text>
              <Text style={styles.textTotal}> / {maxQuestions}</Text>
            </View>
            <Text>Correct</Text>
          </View>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <ModalButton onPress={restart} mode="text">
            Restart Quiz
          </ModalButton>
          <ModalButton onPress={quitResults} mode="contained">
            Done
          </ModalButton>
        </Card.Actions>
      </Card>
    </Modal>
  );
};

export default ResultsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginLeft: -15,
    marginTop: 25,
  },
  subtitle: {
    textAlign: 'center',
    marginLeft: -15,
    marginTop: 10,
  },
  card: {
    position: 'absolute',
    top: 80,
    left: 15,
    right: 15,
    bottom: 80,

    elevation: 10,
  },
  cardActions: {
    justifyContent: 'flex-end',
    padding: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    position: 'absolute',
  },
  resultText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textCorrect: {
    fontSize: 40,
  },
  textTotal: {
    fontSize: 25,
    marginBottom: 5,
  },
});
