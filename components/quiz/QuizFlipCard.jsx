import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { Card, Caption } from 'react-native-paper';
import { ScrollFade } from '../global/ScrollFade';

export const QuizFlipCard = ({ flipCard, currentQuestion, maxQuestions, questions }) => (
  <CardFlip style={styles.cardContainer} ref={flipCard} perspective={1500} flipZoom={-0.1}>
    <Card style={styles.card}>
      <Card.Content style={{ flex: 1 }}>
        <View style={styles.captionWrapper}>
          <Caption>Question —</Caption>
          <Caption>{`${currentQuestion + 1}/${maxQuestions}`}</Caption>
        </View>
        {currentQuestion < maxQuestions && (
          <View style={{ flex: 1 }}>
            <ScrollFade height={25} />
            <ScrollView>
              <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
            </ScrollView>
            <ScrollFade top={false} position={{ bottom: 0 }} height={25} />
          </View>
        )}
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Content style={{ flex: 1 }}>
        <View style={styles.captionWrapper}>
          <Caption>{`${currentQuestion + 1}/${maxQuestions}`}</Caption>
          <Caption>— Answer</Caption>
        </View>
        {currentQuestion < maxQuestions && (
          <View style={{ flex: 1 }}>
            <ScrollFade height={25} />
            <ScrollView>
              <Text style={styles.answerText}>{questions[currentQuestion].answer}</Text>
            </ScrollView>
            <ScrollFade top={false} position={{ bottom: 0 }} height={24} />
          </View>
        )}
      </Card.Content>
    </Card>
  </CardFlip>
);

export default QuizFlipCard;

const styles = StyleSheet.create({
  card: { flex: 1 },
  captionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    flexShrink: 0,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 15,
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  answerText: {
    textAlign: 'right',
    fontSize: 50,
  },
  questionText: {
    fontSize: 50,
  },
});
