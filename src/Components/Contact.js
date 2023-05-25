import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    color: 'red',
  },
});
