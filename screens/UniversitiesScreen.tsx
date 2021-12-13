import * as React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';

import { TextInput, View } from '../components/Themed';
import UniversityList from '../components/UniversityList';
import { RootTabScreenProps } from '../types';

export default function UniversitiesScreen({}: RootTabScreenProps<'UniversitiesScreen'>) {
  return (
    <View style={styles.container} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      <TextInput style={styles.input} />
      <View style={styles.list}>
        <UniversityList universities={[
          {
            country: "United States",
            web_page: "http://www.harvard.edu/",
            domain: "harvard.edu",
            name: "Harvard University",
            alpha_two_code: "US",
            estYear: "1984"
          }, {
            country: "United States",
            web_page: "http://web.mit.edu/",
            domain: "mit.edu",
            name: "Massachusetts Institute of Technology",
            alpha_two_code: "US",
            estYear: "1986"
          },
        ]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  list: {
    width: '100%',
  },
});
