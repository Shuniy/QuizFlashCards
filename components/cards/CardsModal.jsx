import React, { useState } from 'react';
import { Modal, Card, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { addQuestion } from '../../actions';
import { ModalButton } from '../global/ModalButton';

const ModalInput = (props) => (
  <TextInput
    {...props}
    style={styles.input}
    mode="outlined"
    theme={{
      colors: {
        primary: '#000',
      },
    }}
  />
);

export const CardsModal = ({ visible, hideModal, deck }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [errorQuestion, setErrorQuestion] = useState(false);
  const [errorAnswer, setErrorAnswer] = useState(false);
  const dispatch = useDispatch();

  const reset = () => {
    setQuestion('');
    setAnswer('');
    setErrorAnswer(false);
    setErrorQuestion(false);
  };

  const handleCreate = () => {
    if (question !== '' && answer !== '') {
      dispatch(addQuestion(deck, { question, answer }));
      hideModal();
      reset();
    }
    setErrorQuestion(question === '');
    setErrorAnswer(answer === '');
  };

  const handleHideModal = () => {
    reset();
    hideModal();
  };

  return (
    <Modal visible={visible} dismissable={false}>
      <Card style={styles.card}>
        <Card.Title title="Create New Card" />
        <Card.Content>
          <ModalInput
            value={question}
            onChangeText={setQuestion}
            label="Question"
            error={errorQuestion}
          />
          <ModalInput value={answer} onChangeText={setAnswer} label="Answer" error={errorAnswer} />
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

export default CardsModal;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,

    elevation: 10,
  },
  cardActions: { justifyContent: 'flex-end', padding: 16 },
  input: {
    marginBottom: 5,
  },
});
