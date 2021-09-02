import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const ModalButton = ({ children, onPress, mode }) => (
  <Button
    mode={mode}
    uppercase={false}
    onPress={onPress}
    contentStyle={styles.buttonContent}
    labelStyle={styles.buttonLabel}
    style={styles.button}>
    {children}
  </Button>
);

export default ModalButton;

const styles = StyleSheet.create({
  button: { marginLeft: 5 },
  buttonLabel: { letterSpacing: 0 },
  buttonContent: { paddingHorizontal: 15, height: 35 },
});
