import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

const Actions = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handlePress = (buttonLabel: string) => {
    switch(buttonLabel) {
      case 'return':
        navigation.navigate('ReturnDashboard');
        return;
      case 'reminders':
        navigation.navigate('RemindersScreen');
        return;
      case 'borrow':
        navigation.navigate('BorrowDashboard');
        return;
      case 'settings':
        navigation.navigate('Settings');
        return;
      default:
        return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button title="Borrow item" onPress={() => handlePress('borrow')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Return item" onPress={() => handlePress('return')} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button title="Reminders" onPress={() => handlePress('reminders')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Settings" onPress={() => handlePress('settings')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1, // Buttons will take equal space
    marginHorizontal: 10, // Add some spacing between columns
  },
});

export default Actions;