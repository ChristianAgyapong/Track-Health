import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../component/Header';
import MedicationList from '../../component/MedicationList';

const HomeScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <View style={{ flex: 1 }}>
        <MedicationList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    padding: 25,
    minHeight: '100%',
  },
});

export default HomeScreen;
