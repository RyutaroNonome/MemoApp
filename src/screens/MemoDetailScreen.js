import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircleButton from '../elements/CircleButton';

export default class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
          <Text style={styles.memoHeaderDate}>2017/12/12</Text>
        </View>

        <View style={styles.memoContent}>
          <Text>
            講座のアイデアです。
          </Text>
        </View>

        <CircleButton color="white" style={styles.editButton}>
          {'\uf040'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17212C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#ddd',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});