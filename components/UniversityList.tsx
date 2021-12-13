import React from 'react';
import { StyleSheet, VirtualizedList } from 'react-native';

import { University } from '../types';
import { Text, View } from './Themed';


const Item = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

export default function UniversityList({ universities }: { universities: University[] }) {
  return (
    <VirtualizedList
      data={universities}
      initialNumToRender={12}
      renderItem={({ item }: { item: University }) => <Item title={item.name} subtitle={item.domain} />}
      keyExtractor={item => item.name}
      getItemCount={() => universities.length}
      getItem={(data, index) => data[index]}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
    color: 'grey',
  },
});
