import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type TaskProps = {
  text: string;
};

export default function Task({text}: TaskProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    height: 12,
    width: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
