import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const QuizButton = ({ children, onPress, icon, mode }) => (
  <Button
    mode={mode}
    icon={icon}
    uppercase={false}
    onPress={onPress}
    contentStyle={styles.buttonContent}
    labelStyle={styles.buttonLabel}
    style={styles.button}>
    {children}
  </Button>
);

export default QuizButton;

const styles = StyleSheet.create({
  buttonContent: {
    height: 50,
  },
  buttonLabel: { letterSpacing: 0 },
  button: {
    flex: 1,
    margin: 10,
  },
});
